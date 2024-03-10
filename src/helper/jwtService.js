const jwt = require("jsonwebtoken");
module.exports = {
  generateVerificationToken: async function (user) {
    const token = await jwt.sign(user, process.env.VERIFICATION_TOKEN_SECRET);
    const tokenParam = Buffer.from(token).toString("base64");
    return tokenParam;
  },
  verifyToken: async function (token) {
    try {
      const jwttoken = Buffer.from(token, "base64").toString("utf-8");
      // console.log('verifyToken() ' + jwttoken)
      // console.log('verifyToken() ' + process.env.VERIFICATION_TOKEN_SECRET);
      const payload = await jwt.verify(
        jwttoken,
        process.env.VERIFICATION_TOKEN_SECRET
      );
      console.log(payload);
      return {
        message: payload,
        flag: true,
      };
    } catch (error) {
      console.log("verifyToken() " + error.message);
      return {
        message: error.message,
        flag: false,
      };
    }
  },
};
