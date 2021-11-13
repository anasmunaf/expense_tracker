/** @format */

const express = require("express");
const config = require("config");
const dotenv = require("dotenv");
const router = require("./routes/transaction");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/transactions", router);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("./frontEnd/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontEnd", "build", "index.html")),
  );
}

const port = process.env.PORT || config.get("port");

app.listen(port, () => {
  console.log("Connected to server at port " + port);
});
