const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/all", controllers.user.index);
router.get("/:userId", controllers.user.showOne);

module.exports = router;
