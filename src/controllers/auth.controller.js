const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateUsername, checkMNNITEmail } = require("../helper/authHelper");
const {
  generateVerificationToken,
  verifyToken,
} = require("../helper/jwtService");
const {
  sendUserVerificationMail,
  sendUserResetPassword,
} = require("../helper/mailHandler");

const dc = "DepartmentCordinator";
const fes = "FestivalSecretary";

const userSignup = async (req, res, next) => {
  const { name, email, college, gender, phone, password, resumeLink } =
    req.body;
  console.log(req.body);
  //   console.log(phone);
  // generating salt for password hash and token for user email verification
  try {
    console.log("entered try catch");
    if (!name || !email || !college || !gender || !phone || !password) {
      // check if all field are filled

      console.log("data missing");
      res.statusCode = 400;
      console.log(req.body);
      res.json({
        error: "bad request",
        message: "complete information is not available!!",
        success: false,
      });
      return;
    }
    if (password.length < 8) {
      // check for weak password
      console.log("weak password");
      res.statusCode = 401;
      res.json({
        error: "bad request",
        message: "Password must have 8 characters",
        success: false,
      });
      return;
    }
    const username = generateUsername(email);
    const emailUser = await User.findOne({ email: email });
    const mobileUser = await User.findOne({ phone: phone });

    if (emailUser != null || mobileUser != null) {
      console.log("user already exists");
      res.statusCode = 402;
      res.json({
        error: "bad request",
        message: "email / mobile already in use!",
        success: false,
      });
      return;
    } else if (checkMNNITEmail(email) && college == "other") {
      // check if the user has given gsuite Id
      console.log("mnnit student with non mnnit cred");
      res.statusCode = 403;
      res.json({ message: "Please select MNNIT as college", success: false });
      return;
    } else if (gender !== "male" && gender !== "female") {
      // validate gender
      console.log("wrong gender");
      res.statusCode = 404;
      res.json({
        error: "bad request",
        message: "invalid gender!",
        success: false,
      });
      return;
    } else {
      // !!! IMP : if collegeName is anything other than this in the backend result would always be non MNNIT students
      if (college == "mnnit") {
        // note
        console.log("ok");
        const isMnnitEmail = checkMNNITEmail(email);
        if (isMnnitEmail == true) {
          const newUser = await User.create({
            name,
            email,
            phone,
            password,
            username,
            college: college,
            isVerified: false,
            isFeePaid: false,
            resumeLink,
          });

          const token = await generateVerificationToken({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          });
          const mailSent = await sendUserVerificationMail(email, token); // same thing different style
          if (!newUser) {
            res.statusCode = 407;
            res.json({ message: "Could Not Create User", success: false });
            return;
          } else {
            if (!mailSent) {
              res.statusCode = 408;
              res.json({
                message: "Could Not Sent Verification Email",
                success: false,
              });
              return;
            } else {
              res.statusCode = 200;
              res.json({
                message: "User Registration Successful! Email Has Been Sent",
                success: true,
              });
              return;
            }
          }
        } else {
          res.statusCode = 406;
          res.json({
            message: "Please Sign Up With G-suite Id",
            success: false,
          });
          return;
        }
      } else {
        const newUser = await User.create({
          name,
          email,
          phone,
          password,
          username,
          college: college,
          isVerified: false,
          isFeePaid: false,
          resumeLink,
        });
        // console.log(newUser);

        const token = await generateVerificationToken({
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        });
        const mailSent = await sendUserVerificationMail(email, token); // same thing different style
        if (!newUser) {
          res.statusCode = 407;
          res.json({ message: "Could Not Create User", success: false });
          return;
        } else {
          if (!mailSent) {
            res.statusCode = 408;
            res.json({
              message: "Could Not Sent Verification Email",
              success: false,
            });
            return;
          } else {
            res.statusCode = 200;
            res.json({
              message: "User Registration Successful! Email Has Been Sent",
              success: true,
            });
            return;
          }
        }
      }
    }
  } catch (error) {
    console.log("error occured in the userSignup() controller!");
    res.statusCode = 410;

    res.json({ message: "Could Not SignUp", success: "false" });
    return;
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  const { email } = req.body;
  let { password } = req.body;
  if (!email || !password) {
    // check if email and password field are not blank
    res.statusCode = 400;
    res.json({
      error: "email and password cannot be empty",
      message: "Email And Password both Need to be Provided",
    });
    return;
  }
  try {
    const user = await User.findOne({ email: email });

    // case when the user with the credentials is not found
    if (!user) {
      res.statusCode = 404;
      return res.json({
        error: "user not found",
        message: "email and password don't match!", //check if verified
        success: false,
      });
    } else {
      if (!user.isVerified) {
        res.statusCode = 400;

        return res.json({
          error: "user not verified",
          message: "Please Verify Your Email!! Email Already Sent", //check if verified
          success: false,
        });
      }
    }

    // case when the passwords don't match
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      res.statusCode = 401;
      return res.json({
        error: "authentication error",
        message:
          user.password === null
            ? "please verify yourself and try again!"
            : "email/username and password don't match!",
        success: false,
      });
    }

    const token = await generateVerificationToken({
      _id: user._id,
      email: user.email,
      username: user.username,
    }); // generate token
    // this generated Token Will be stored in backend

    res.statusCode = 200;
    res.json({ message: "user login successful!", token, success: true });
  } catch (error) {
    console.log("error occured in the userSignin() controller!");
    next(error);
  }
};

const userResetPassword = async (req, res, next) => {
  const { token } = req.body;
  let { password } = req.body;
  if (!password) {
    // check if password is empty
    res.statusCode = 400;
    res.json({
      error: "Missing Password",
      message: "No Password Provided",
      success: false,
    });
    return;
  }
  if (!token) {
    // check if token is empty
    res.statusCode = 400;
    res.json({
      error: "Missing Token",
      message: "No Token Provided",
      success: false,
    });
    return;
  }
  try {
    const { message, flag } = await verifyToken(token); // verify the token
    if (!flag) {
      // if token was not verified as valid
      res.statusCode = 404;
      return res.json({
        message: "Invalid Token.Try Again",
        success: false,
      });
    }

    if (password.length < 8) {
      // if password is not strong (can replace with strong password check or any else)
      res.statusCode = 404;
      return res.json({
        message: "Password should have 8 charaters",
        success: false,
      });
    }
    console.log(message.email);

    const user = await User.findOne({ email: message.email }); // find the user who's password is to be reset

    const salt = await bcrypt.genSalt(10); // not needed really but still doing
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.statusCode = 200;
    res.json({ message: "password reset successful!", success: true });
  } catch (error) {
    console.log("error occured in the userResetPassword() controller!");
    next(error);
  }
};

const userForgotPassword = async (req, res) => {
  console.log("forgot entered");
  const { email } = req.body;
  if (!email) {
    // in case email does not work
    res.statusCode = 400;
    res.json({
      message: "No Email Provided",
      success: false,
    });
    return;
  }
  const user = await User.findOne({ email: email });

  if (!user) {
    // in case user does not exist
    res.statusCode = 400;
    res.json({
      message: "No User Exists of that Email",
      success: false,
    });
    return;
  }

  const token = await generateVerificationToken({
    _id: user._id,
    email: user.email,
    username: user.username,
  });
  const flag = await sendUserResetPassword(email, token);
  if (flag) {
    // if the token is successfully generated
    res.statusCode = 200;
    res.json({
      message: "Reset Email Has Been Sent",
      success: true,
    });
    return;
  } else {
    res.statusCode = 400; // in case something went wrong
    res.json({
      error:
        "Something went Wrong in Generating Token or Sending It to Email!!",
      message: "Could Not Send Email",
      success: false,
    });
    return;
  }
};

const verifyUser = async (req, res) => {
  const token = req.body.token;
  if (!token) {
    // check if token exist
    res.statusCode = 400;
    res.json({
      error: "No Token Was Found",
      message: "No Token Was Provided For Verification",
      success: false,
    });
    return;
  }
  try {
    const data = await verifyToken(token); // check if token is correct
    if (data.flag) {
      // if success fully found
      const id = data.message._id;
      const user = await User.findOne({ _id: id });
      if (!user) {
        res.statusCode = 401;
        res.json({
          error: "User Not Found",
          message: "Could Not Find The User",
          success: false,
        });
        return;
      }
      if (user.isVerified)
        return res.status(403).json({
          success: false,
          message: "User is Already Verified",
        });
      user.isVerified = true;
      user.expireAt = new Date("12-12-9999");
      await user.save();
      res.statusCode = 200;
      res.json({
        success: true,
        message: "verified the user sucessfully",
      });
      return;
    } else {
      res.statusCode = 402;
      res.json({
        success: false,
        message: "something went wrong in verification",
        error: "Could Not Verify",
      });
      return;
    }
  } catch (e) {
    console.log(e);
    res.statusCode = 403;
    res.json({
      success: false,
      message: "something went wrong in verification",
    });
    return;
  }
};

module.exports = {
  userResetPassword,
  userLogin,
  userSignup,
  userForgotPassword,
  verifyUser,
};
