import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

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

console.log("Hello! Backend Running");

// MONGOOSE SETUP
