require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const AuthRoute = require("./routes/auth");
const UserRoute = require("./routes/user");

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const PORT = process.env.PORT || 3200;
const origin = process.env.ORIGIN;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@tcc-mongo-dev.q76kj.mongodb.net/?retryWrites=true&w=majority&appName=tcc-mongo-dev`
  )
  .then(() => {
    console.log("Conectou ao banco!");
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: `${origin}`,
  })
);

app.listen(PORT);

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
