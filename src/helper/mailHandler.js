const nodemailer = require("nodemailer");

 
 


 async function sendUserVerificationMail(email,token) {
    const mailSubject = "User Email Verification 👩‍💻";
    const mailMessage = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify E-Mail</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        padding: 20px;
      }
    
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    
      .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
      }
    </style>
    </head>
    <body>
    <div class="container">
      <h2 style="text-align: center;">Click here to Verify</h2>
      <p style="text-align: center;"><a href="${process.env.FRONTEND_URL}/verify/${token}" class="button" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a></p>
      <p style="text-align: center;">If that does not work, copy and paste the following URL in the browser:</p>
      <p style="text-align: center;"><a href="${process.env.FRONTEND_URL}/verify/${token}" style="color: #007bff; text-decoration: none;">${process.env.FRONTEND_URL}/verify/${token}</a></p>
    </div>
    </body>
    </html>
    `;
     const mailSent = await mailSender(email, mailSubject, mailMessage);
     return mailSent
  }
 async function sendUserResetPassword(email, token) {
    const mailSubject = "Reset Password Link";
    const mailMessage = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        padding: 20px;
      }
    
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    
      .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
      }
    </style>
    </head>
    <body>
    <div class="container">
      <h2 style="text-align: center;">Click here to Reset Password</h2>
      <p style="text-align: center;"><a href="${process.env.FRONTEND_URL}/resetpassword/${token}" class="button" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a></p>
      <p style="text-align: center;">If that does not work, copy and paste the following URL in the browser:</p>
      <p style="text-align: center;"><a href="${process.env.FRONTEND_URL}/resetpassword/${token}" style="color: #007bff; text-decoration: none;">${process.env.FRONTEND_URL}/resetpassword/${token}</a></p>
    </div>
    </body>
    </html>
    
    `;
     const mailSent = await mailSender(email, mailSubject, mailMessage);
     return mailSent
  }

 
  
  async function mailSender(email, subject, message) {
      try {
          
  
        var mailOptions = {
            from : process.env.EMAIL_SMTP,
            to : email,
            subject : subject,
            html : message,
        }
        var transporter = nodemailer.createTransport({
          host:process.env.SMTP_HOST,
          port:Number(process.env.SMTP_PORT),
          secure:Boolean(process.env.STMP_SECURE),
          service : 'gmail',
          auth : {
            user : process.env.EMAIL_SMTP,
            pass : process.env.EMAIL_PASSWORD,
          }
        })
        const flag = await transporter.sendMail(mailOptions);
        console.log(flag);
        if(flag){
          console.log('successfully sent email');
        }
        return true
      } catch (error) {
          console.log("error occured in the mailSender() function!");
          console.log(error);
          return false
      }
  }

  module.exports = {
    sendUserResetPassword,
    sendUserVerificationMail,
    mailSender,
  }