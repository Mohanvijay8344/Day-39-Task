const express = require("express");
const app = express();
var fs = require("fs");

let title = () => {
  var timestamp = new Date().toISOString();
  return timestamp;
};

let content = () => {
  var timestamp = new Date().getTime();
  return timestamp;
};

let body = title();
let timeStamp = content();

fs.writeFile(`${timeStamp}.txt`, `${body}`, function (err) {
  if (err) throw err;
  console.log("TimeStamp Created !!!");
});

app.listen(3000, () => {
  console.log("listening on server 3000");
});