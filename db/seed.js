const db = require("../models");
const bcrypt = require("bcrypt");

const User = db.User,
  Post = db.Post;

const userList = [
  {
    email: "jonathan@gmail.com",
    password: "password1"
  },
  {
    email: "james@gmail.com",
    password: "password1"
  },
  {
    email: "joseph@gmail.com",
    password: "password1"
  }
];

const postList = [
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  }
];

const seedDatabase = async () => {};
