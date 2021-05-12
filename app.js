const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
const port = 5000;

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
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${data}/`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const appendToFile = (data) => {
  fs.appendFile("./data.txt", data, (error) => {
    if (error) throw error;
  });
};

const copyFile = (fileName) => {
  fs.copyFile(fileName, `copy_of_${fileName}`, (error) => {
    if (err) throw err;
  });
};
const post = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  userId: 1,
});

const createPost = (post) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", post)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

// getPostAsync(50);
// getPost(1);
// // getPost(50);
// writeFile();
readFile();
// appendToFile("this is the new data");
// copyFile("data.txt");
createPost(post);

app.listen(port, () => {
  console.log("W07D03_Asyncronous_Programming");
});
