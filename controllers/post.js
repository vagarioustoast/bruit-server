const db = require("../models");
const Post = db.Post;

module.exports = {
  index: async (req, res) => {
    try {
      let allPosts = await Post.find({}, { __v: 0 })
        .populate("user")
        .exec();
      res.json(allPosts);
    } catch (err) {
      console.error(err);
    }
  },
  showOne: async (req, res) => {
    try {
      let post = await Post.findById({ _id: req.params.postId }, { __v: 0 });
      res.json(post);
    } catch (err) {
      console.error(err);
    }
  },
  showUserPosts: async (req, res) => {
    try {
      let userPosts = await Post.findById({ _id: req.params.userId });

      res.json(userPosts);
    } catch (err) {
      console.error(err);
    }
  }
};
