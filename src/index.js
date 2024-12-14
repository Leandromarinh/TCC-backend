require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");

const AuthRoute = require("./routes/auth");
const UserRoute = require("./routes/user");

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const PORT = process.env.PORT || 3200;
const origin = process.env.ORIGIN;
const cert = process.env.CERT

const options = {
  ssl: true,
  sslValidate: true,
  sslCA: fs.readFileSync(cert),
};

mongoose
  .connect(
    `mongodb://${dbUser}:${dbPass}@docdb-tcc.cluster-covg2ow5gv7z.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`,
    options
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
