const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// root
app.get("/", (req, res) => {
  res.send("Server is running");
});

// listen
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
