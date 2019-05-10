const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/all", controllers.post.index);
router.get("/:postId", controllers.post.showOne);

module.exports = router;
