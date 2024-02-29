const express=require('express');
const { userSignup, userSignin, userResetPassword, userForgotPassword, verifyUser } = require('../controllers/auth.controller');


const router=express.Router();

router.use((req,res,next)=>{
    console.log('Auth router triggered');
    next();
})

router.post('/signup',userSignup);
router.post('/signin',userSignin);
router.post('/resetpassword',userResetPassword)
router.post('/forgotpassword',userForgotPassword);
router.post('/verifyemail' , verifyUser);


module.exports=router;