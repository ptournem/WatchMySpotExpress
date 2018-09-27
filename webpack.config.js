const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

let config = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./index.js"
  }
}
