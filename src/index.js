require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

console.log(dbPass, dbUser);

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@tcc-mongo-dev.q76kj.mongodb.net/?retryWrites=true&w=majority&appName=tcc-mongo-dev`
  )
  .then(() => {
    console.log("Conectou ao banco!");
  })
  .catch((err) => console.log(err));

app.listen(3200);

// Open Route - Public Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a nossa API!" });
});
