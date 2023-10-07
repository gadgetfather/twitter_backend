const express = require("express");
const router = express.Router();
const TweetController = require("../../controller/tweet-controller");

router.post("/tweets", TweetController.create);

router.get("/tweets", TweetController.getAll);

module.exports = router;
