const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const authenticate = require("../middleware/authenticate");

router.get("/:id", authenticate, UserController.getUser);
router.put("/update/:id", authenticate, UserController.updateUser);
router.put("/update/:id/password", authenticate, UserController.updatePassword);

module.exports = router;
