const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const authenticate = require("../middleware/authenticate");

router.get("/:id", authenticate, UserController.getUser);

module.exports = router;
