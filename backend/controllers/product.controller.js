import asyncHandler from "express-async-handler";

import Product from "../models/product.model.js";

/* 
  @route -> GET /api/products/ 
  @desc  -> get products from the database
*/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().lean().exec();

  res.send(products);
});

/* 
  @route -> GET /api/products/:id 
  @desc  -> get product by id from the database
*/
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).lean().exec();

  if (product) {
    res.send(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export { getProductById, getProducts };
