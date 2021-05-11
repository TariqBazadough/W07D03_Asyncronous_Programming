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
const getPost = (id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const getPostAsync = async (data) => {
  let response;
  response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${data}/`
  );
  console.log(response.data);
};

getPostAsync(50);
// getPost(1);
// getPost(50);
// writeFile();
readFile();

app.listen(port, () => {
  console.log("W07D03_Asyncronous_Programming");
});
