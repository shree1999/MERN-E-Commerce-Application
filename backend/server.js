import express from "express";

import {
  notFoundError,
  errorHandlerFunction,
} from "./middleware/error.middleware.js";
import { keys } from "./config/keys.js";
import productRoutes from "./routes/products.routes.js";
import connectDatabase from "./config/db.js";

connectDatabase();
const app = express();
const PORT = keys.port;

app.use("/api/products", productRoutes);

app.use(notFoundError);
app.use(errorHandlerFunction);

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
