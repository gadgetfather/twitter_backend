const { Hashtag } = require("../models/hashtag");

async function create(hashtag) {
  return Hashtag.create(hashtag);
}
async function bulkCreate(hashtags) {
  return Hashtag.insertMany(hashtags);
}
async function getAll() {
  return Hashtag.find({});
}

async function remove(id) {
  return Hashtag.findByIdAndRemove(id);
}

async function findByName(title) {
  return Hashtag.find({ title: title }).select("title -_id");
}

module.exports = {
  create,
  getAll,
  bulkCreate,
  remove,
  findByName,
};
