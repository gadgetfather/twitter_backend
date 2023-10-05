const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect("mongodb://localhost:27017/users", {});
};

module.exports = connect;
