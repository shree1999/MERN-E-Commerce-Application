import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/user.model.js";
import { keys } from "../config/keys.js";

const auth = asyncHandler(async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    res.statusCode = 401;
    throw new Error("Not, Authorized");
  }

  try {
    const decoded = jwt.decode(token, keys.jwtSecret);
    const user = await User.findById({ _id: decoded.id }).select("-password");
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.statusCode = 401;
    throw new Error("Not, Authorized");
  }
});

export default auth;
