import dotenv from "dotenv";

dotenv.config();

export const keys = {
  port: process.env.PORT,
  mongodbURI: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
};
