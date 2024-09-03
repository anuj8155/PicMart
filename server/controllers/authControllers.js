const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../helper/accessToken");
const { generateRefreshToken } = require("../refreshToken");
const User = require("../models/user");

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already alredy exsist" });
    }
    const securePassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      email,
      password: securePassword,
      accountType,
    });
    await user.save();

    return res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body; // Changed to 'email' instead of 'username'
  try {
    let user = await User.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(400).json({ success: false, message: "Please signup" });
    }
    const comparePassword = await bcrypt.compare(password, user.password); // bcrypt.compare not bcrypt.hash
    if (!comparePassword) {
      return res.status(400).json({ success: false, message: "Wrong password" });
    }
    const data = {
      id: user._id,
      username: user.username,
      email: user.email,
      accountType: user.accountType,
    };
    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = { login, signup}