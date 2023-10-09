const { Comment } = require("../models/comment");

// export comment repository

async function create(data) {
  try {
    const result = await Comment.create(data);
    return result;
  } catch (error) {
    console.log("Something went wrong in crud repo");
    throw error;
  }
}

async function destroy(id) {
  try {
    const result = await Comment.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.log("Something went wrong in crud repo");
    throw error;
  }
}

module.exports = {
  create,
  destroy,
};
