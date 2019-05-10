const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// App
const app = express();
const PORT = process.env.PORT || 3001;

// Routes
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => console.info(`Server is running on ${PORT}`));
