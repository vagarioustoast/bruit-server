const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/all", controllers.post.index);

module.exports = router;
