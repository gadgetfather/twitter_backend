const { Tweet } = require("../models/tweet");

const getAll = async () => {
  return Tweet.find({});
};

const create = async (tweet) => {
  return Tweet.create(tweet);
};

const remove = async (id) => {
  return Tweet?.findByIdAndRemove(id);
};

const update = async (id, tweet) => {
  return Tweet.updateOne({ _id: id }, tweet);
};

module.exports = {
  getAll,
  create,
  remove,
  update,
};
