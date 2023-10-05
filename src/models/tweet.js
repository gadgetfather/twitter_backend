const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    email: { type: String },
  },
  {
    timestamps: true,
  }
);
//actual model used for communication with the database
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = { Tweet };
