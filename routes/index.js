const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController")
const postController = require("../controllers/postController");

router.get("/", homeController.index)
router.get("/users/login", userController.login)
router.get("/post/add", postController.add)
router.post("/post/add", postController.addAction)
//router.get("/users/register", userController.register);

module.exports = router;