import express from "express";

import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();

// app config
const app = express();
const port = 4000;

// middlewears

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API working");
});

// db connection

connectDB();

// api endpoints

// server started

app.listen(port, () => {
  console.log(`App is up and running at port ${port}`);
});
