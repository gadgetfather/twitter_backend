const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: [280, "Cannot be more than 250 chars"],
    },
    hashtags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hashtag" }],
  },
  {
    timestamps: true,
  }
);
//actual model used for communication with the database
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = { Tweet };
