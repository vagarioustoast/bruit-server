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

const seedDatabase = async () => {
  try {
    // Delete All Users
    const deletedUsers = await User.deleteMany();
    console.log(`Deleted ${deletedUsers.deletedCount} users.`);
    // Delete All Posts
    const deletedPosts = await Post.deleteMany();
    console.log(`Deleted ${deletedPosts.deletedCount} posts.`);

    // Hash User Passwords
    for (let user in userList) {
      const hashedPassword = bcrypt.hashSync(userList[user].password, 10);
      userList[user].password = hashedPassword;
    }
    // Create New Users
    const newUsers = await User.create(userList);
    console.log(`Created ${newUsers.length} users.`);

    // Create New Posts
    const newPosts = await Post.create(postList);
    console.log(`Created ${newPosts.length} posts.`);

    // Associate Users/Cities/Posts
    console.log("Associating models...");

    let randomIndex = arr => Math.floor(Math.random() * arr.length);

    for (let post in newPosts) {
      console.log("Random Index = ", randomIndex(newPosts));
      newPosts[post].user = newUsers[randomIndex(newUsers)];
      // Save Post
      await newPosts[post].save();
    }
    console.log("Models associated.");
    console.log("*Exiting*");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
seedDatabase();
