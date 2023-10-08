const express = require("express");
const router = express.Router();
const TweetController = require("../../controller/tweet-controller");
const LikeController = require("../../controller/like-controller");
router.post("/tweets", TweetController.create);
router.post("likes/toggle", LikeController.toggleLike);

router.get("/tweets", TweetController.getAll);

module.exports = router;
