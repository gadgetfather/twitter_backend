const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    email: { type: String },
    tweetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
