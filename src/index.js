const express = require("express");
const app = express();
const port = 3000;
const connect = require("./config/database");
const { Tweet } = require("./models/tweet");

app.use(express.json());

app.listen(port, async () => {
  app.use("/api", require("./routes"));
  console.log(`Example app listening at http://localhost:${port}`);
  await connect();
  console.log("Database connected");
});
