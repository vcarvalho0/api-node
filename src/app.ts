import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

import router from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

mongoose
  .connect(`${process.env.CONNECTION_DB}`, {
    user: `${process.env.DB_USER}`,
    pass: `${process.env.DB_PASSWORD}`,
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log("Can't connect to the database!", err));

export default app;
