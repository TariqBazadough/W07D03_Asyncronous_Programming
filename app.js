const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("W07D03_Asyncronous_Programming");
});
