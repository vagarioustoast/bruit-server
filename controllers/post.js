const db = require("../models");
const Post = db.Post;

module.exports = {
  index: async (req, res) => {
    try {
      let allPosts = await Post.find({});
      res.json(allPosts);
    } catch (err) {
      console.error(err);
    }
  }
};
