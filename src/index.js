const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const connect = require("./config/database");

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(await connect());
  console.log("Mongo db connected");
});
