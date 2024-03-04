const express = require("express");
const {
  userSignup,
  userLogin,
  userResetPassword,
  userForgotPassword,
  verifyUser,
} = require("../controllers/auth.controller");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Auth router triggered");
  next();
});

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/resetpassword", userResetPassword);
router.post("/forgotpassword", userForgotPassword);
router.post("/verifyuser", verifyUser);

module.exports = router;
