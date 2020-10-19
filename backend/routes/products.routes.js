import express from "express";
import asyncHandler from "express-async-handler";

import Product from "../models/product.model.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find().lean().exec();

    res.send(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).lean().exec();

    if (product) {
      res.send(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
