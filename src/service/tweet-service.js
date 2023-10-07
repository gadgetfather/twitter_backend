const TweetRepository = require("../repository/tweet-repository");
const HashtagRepository = require("../repository/hashtag-repository");
const getAll = async () => {
  return TweetRepository.getAll();
};

const create = async (tweet) => {
  const hashtags = tweet.content.match(/#\w+/g);
  const tags = hashtags.map((hashtag) => hashtag.slice(1).toLowerCase());
  const tweetToCreate = {
    content: tweet.content,
  };
  const tweetRes = await TweetRepository.create(tweetToCreate);
  const alreadyExistingHashtags = await HashtagRepository.findByName(tags);
  const existingHashtagTitles = alreadyExistingHashtags.map(
    (hashtag) => hashtag.title
  );
  const newHashtags = tags.filter(
    (tag) => !existingHashtagTitles.includes(tag)
  );
  const newHashtagsToCreate = newHashtags.map((tag) => ({
    title: tag,
    tweet: [tweetRes._id],
  }));
  const updateTweetIds = alreadyExistingHashtags.map((hashtag) => {
    return {
      ...hashtag,
      tweet: [...hashtag.tweet, tweetRes._id],
    };
  });
  await HashtagRepository.bulkCreate(updateTweetIds);
  const newHashtagsRes = await HashtagRepository.bulkCreate(
    newHashtagsToCreate
  );

  const allHashtags = [...alreadyExistingHashtags, ...newHashtagsRes];
  const tweetId = tweetRes._id;
  const hashtagIds = allHashtags.map((hashtag) => hashtag._id);
  await TweetRepository.update(tweetId, { hashtags: hashtagIds });
  return tweetRes;
};

module.exports = {
  getAll,
  create,
};
