import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

import {
  notFoundError,
  errorHandlerFunction,
} from "./middleware/error.middleware.js";
import { keys } from "./config/keys.js";
import productRoutes from "./routes/products.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDatabase from "./config/db.js";

connectDatabase();
const app = express();
const PORT = keys.port;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);

app.use(notFoundError);
app.use(errorHandlerFunction);

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
