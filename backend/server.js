require("dotenv").config();
const express = require("express");

const keys = require("./config/keys");
const productRoutes = require("./routes/products.routes");

const app = express();
const PORT = keys.port;

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
