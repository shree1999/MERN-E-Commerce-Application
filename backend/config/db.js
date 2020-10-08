import mongoose from "mongoose";

import { keys } from "./keys.js";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(keys.mongodbURI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database up and running on ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDatabase;
