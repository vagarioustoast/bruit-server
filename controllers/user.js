const db = require("./models");
const User = db.User;

module.exports = {
  index: async (req, res) => {
    try {
      let allUsers = await User.find({});
      res.json(allUsers);
    } catch (err) {
      console.error(err);
    }
  }
};
