const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.listen(3000, () =>
  console.log("SERVER IS LISTENING NOW AT PORT 3000... !!!")
);