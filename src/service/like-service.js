const LikeRepository = require("../repository/like-repository");

async function toggleLike(modelId, modelType, userId) {
  if (modelType === "Tweet" || modelType === "Comment") {
    const like = await LikeRepository.findLike(modelId, modelType, userId);
    if (like) {
      await LikeRepository.destroy(like._id);
    } else {
      await LikeRepository.create({
        onModel: modelType,
        likeable: modelId,
        user: userId,
      });
    }
  } else {
    throw new Error("Invalid model type");
  }
}

module.exports = {
  toggleLike,
};
