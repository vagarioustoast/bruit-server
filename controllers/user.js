const db = require("../models");
const User = db.User;

module.exports = {
  index: async (req, res) => {
    try {
      let allUsers = await User.find({}, { __v: 0 });
      res.json(allUsers);
    } catch (err) {
      console.error(err);
    }
  },
  showOne: async (req, res) => {
    try {
      let user = await User.findById({ _id: req.params.userId });
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  }
};
