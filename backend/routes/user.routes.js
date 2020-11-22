import express from "express";

import { authUserLogin } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/login").post(authUserLogin);

export default router;
