const express = require("express");
const {validationResult}=require('express-validator')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer=require('nodemailer')
const User = require("../models/user");
require('dotenv').config();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Logic for user registration
exports.postRegistration = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array())
      return res.status(400).json({ errors: errors.array() });
      
    }  
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email: email,
      password: hashedPassword,
    });

    const result = await user.save();

    console.log("Registration successful");
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send("Error occurred during registration");
  }
};

// Logic for user login
exports.postLogin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      console.log("Invalid user");
      return res.send("Invalid user");
    }

    const doMatch = await bcrypt.compare(password, user.password);

    if (doMatch) {
      const token = jwt.sign(
        { user_id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: "30d" }
      );

      console.log("Login successful");
      res.json({ token: token });
    } else {
      console.log("Invalid password");
      res.send("Invalid password");
    }
  } catch (err) {
    console.log(err);
    res.send("Error occurred during login");
  }
};

exports.postResetPassword=async(req,res,next)=>{
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      console.log("Invalid user");
      return res.status(401).json({ error: "Invalid user" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ token: token });

    const mailOptions = {
      from: "rajeshpushpakar01@gmail.com",
      to: email,
      subject: "Password Reset",
      html: `<p>You have requested to reset your password. Click <a href="http://your-app/reset-password/${token}">here</a> to reset your password.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error sending password reset email" });
      }
      console.log("Password reset email sent");
      res.json({ message: "Password reset email sent" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred during password reset" });
  }
}



exports.postNewPassword=async(req,res,next)=>{
  try {
    const { newPassword } = req.body;
    const user_id=req.user.userId
    const user = await User.findById(user_id);
    if (!user) {
      console.log("Invalid user");
      return res.status(401).json({ error: "Invalid user" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();

    console.log("New password set successful");
    res.json({ message: "New password set successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred during setting new password" });
  }
}