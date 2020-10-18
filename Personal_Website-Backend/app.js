require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const emailRoutes = require("./controllers/email");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/email",emailRoutes)

app.listen(process.env.PORT || 3001, function () {
  console.log("Listening on port 3001");
});
