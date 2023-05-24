//const express = require('express')
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";

const app = express();

/**app middleware */
/**routes */
app.use(morgan ('tiny'));
app.use(cors());
app.use(express.json());
config();

/**APPLICATION PORT */

const port = process.env.PORT|| 8080;

app.get("/", (req, res) => {
  try {
    res.json("Get request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port , () => {
  console.log(`Server connected to http://localhost:${port}`);
});
