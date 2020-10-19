import express from "express";

import Product from "../models/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();

    res.send(products);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();

    res.send(product);
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
