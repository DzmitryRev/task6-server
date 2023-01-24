import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();
mongoose.set("strictQuery", false);

const app = express();

const PORT = 3006;

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL).catch((error: Error) => {
      throw new Error(error.message);
    });
    app.listen(PORT, () => {
      console.log(`Server is running. PORT=${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
