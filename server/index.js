import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";

import { kpis, products } from "./data/data.js";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));

    //SEED DATA for the first Time
    // await mongoose.connection.db.dropDatabase();
    //Product.insertMany(products);
  })
  .catch((error) => console.log(`${error} did not connect`));
