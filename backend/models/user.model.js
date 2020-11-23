import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { keys } from "../config/keys.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();

  delete userObject.password;
  return userObject;
};

userSchema.statics.findByCred = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid Email or password");
  }

  return user;
};

userSchema.methods.getAuthToken = function () {
  const token = jwt.sign({ id: this._id }, keys.jwtSecret, {
    expiresIn: "30d",
  });

  return token;
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

const User = mongoose.model("User", userSchema);

export default User;
