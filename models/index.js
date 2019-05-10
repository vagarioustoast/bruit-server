const mongoose = require("mongoose");
const DB_URL =
  process.env.MONGODB_URI || "mongodb://localhost:27017/bruit-server";

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB has connected.`))
  .catch(err => console.error(err));

module.exports = {
  User: require("./User"),
  Post: require("./Post")
};
