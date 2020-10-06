const express = require("express");

const products = require("../Data/products");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);

  res.send(product);
});

module.exports = router;
