const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.json());
const promiseFs = require("fs").promises;

const readFile = async () => {
  try {
    const data = await promiseFs.readFile("data.txt");
    console.log(data.toString());
  } catch (err) {
    throw err;
  }
};

const writeFile = () => {
  fs.writeFile("text.txt", "A new file has been created", (err) => {
    if (err) throw err;
    console.log("A new file has been created");
  });
};

writeFile();
readFile();

app.listen(port, () => {
  console.log("W07D03_Asyncronous_Programming");
});
