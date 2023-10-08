const LikeService = require("../service/like-service");

async function toggleLike(req, res) {
  const { modelId, modelType } = req.params;
  const userId = req.user._id;
  try {
    await LikeService.toggleLike(modelId, modelType, userId);
    res.status(200).send({ message: "Success" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = {
  toggleLike,
};
