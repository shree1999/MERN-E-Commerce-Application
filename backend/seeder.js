import mongoose from "mongoose";

import users from "./Data/users.js";
import products from "./Data/products.js";

import User from "./models/user.model.js";
import Product from "./models/product.model.js";
import Order from "./models/order.model.js";
import connectDatabase from "./config/db.js";

connectDatabase();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("Data deleted!!");

    // storing users in database
    const dbUsers = await User.insertMany(users);

    const adminUserId = dbUsers[0]._id; // getting the admin

    const newProducts = products.map(product => {
      return { ...product, creator: adminUserId };
    });

    // storing products in database
    const dbProducts = await Product.insertMany(newProducts);

    console.log("Data inserted in database");
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("Data deleted!!");
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
