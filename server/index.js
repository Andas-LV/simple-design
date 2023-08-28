import express from "express";
import mongoose from "mongoose";
import {get} from "config";
// import authRouter from "./routes/auth.routes";

const app = express();
const PORT = get("serverPort");

// app.use("/api/auth", authRouter)

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log("Server started on port ", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
