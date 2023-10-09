const CommentRepository = require("../repository/comment-repository");

async function create(data) {
  try {
    const result = await CommentRepository.create(data);
    return result;
  } catch (error) {
    console.log("Something went wrong in crud service");
    throw error;
  }
}

async function destroy(id) {
  try {
    const result = await CommentRepository.destroy(id);
    return result;
  } catch (error) {
    console.log("Something went wrong in crud service");
    throw error;
  }
}

module.exports = {
  create,
  destroy,
};
