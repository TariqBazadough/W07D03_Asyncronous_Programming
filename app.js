const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.json());
const promiseFs = require("fs").promises

const readFile = async () => {
  try {
    const data = await promiseFs.readFile("data.txt");
    console.log(data.toString());
  } catch (err) {
    throw err;
  }
};

readFile();

app.listen(port, () => {
  console.log("W07D03_Asyncronous_Programming");
});
