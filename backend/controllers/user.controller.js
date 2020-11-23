import asyncHandler from "express-async-handler";

import User from "../models/user.model.js";

/*
  @route -> POST /api/auth/login
  @desc  -> allow users to login
*/
const authUserLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCred(email, password);
    const token = user.getAuthToken();
    res.send({ success: true, user, token });
  } catch (error) {
    res.statusCode = 400;
    throw new Error(error.message);
  }
});

/*
  @route -> GET /api/auth/profile
  @desc  -> check whether user is authorized or not
*/
const getUserProfile = asyncHandler(async (req, res) => {
  res.send({ success: true, user: req.user });
});

/*
  @route -> POST /api/auth/register
  @desc  -> register user in application
*/
const authUserRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.statusCode = 400;
    throw new Error("User already exists");
  }

  const user = new User({ name, email, password });
  if (user) {
    await user.save();
    const token = user.getAuthToken();
    res.status(201).send({ success: true, user, token });
  } else {
    res.statusCode = 400;
    throw new Error("Invalid User Data");
  }
});

export { authUserLogin, getUserProfile, authUserRegister };
