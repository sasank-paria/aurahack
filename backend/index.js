const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config;
const dbConnect = require("./config/dbConnect.js");
const port = process.env.PORT;
dbConnect();

//middleware to parse the json data
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
