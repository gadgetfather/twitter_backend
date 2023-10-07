const TweetService = require("../service/tweet-service");

const getAll = async (req, res) => {
  const tweets = await TweetService.getAll();
  res.send(tweets);
};

const create = async (req, res) => {
  const tweet = await TweetService.create(req.body);
  res.send(tweet);
};

module.exports = {
  getAll,
  create,
};
