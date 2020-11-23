import express from "express";

import auth from "../middleware/auth.middleware.js";

import {
  authUserLogin,
  getUserProfile,
  authUserRegister,
} from "../controllers/user.controller.js";
const router = express.Router();

router.route("/login").post(authUserLogin);
router.route("/profile").get(auth, getUserProfile);
router.route("/register").post(authUserRegister);

export default router;
