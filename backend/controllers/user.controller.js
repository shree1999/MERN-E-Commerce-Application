import asyncHandler from "express-async-handler";

import User from "../models/user.model.js";

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

export { authUserLogin };
