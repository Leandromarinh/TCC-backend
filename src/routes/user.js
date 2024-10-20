const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const authenticate = require("../middleware/authenticate");

router.get("/:id", authenticate, UserController.getUser);
router.put("/update/:id", authenticate, UserController.updateUser);
router.put("/update/:id/password", authenticate, UserController.updatePassword);
router.put(
  "/update/:id/subject/:period/:subjectId",
  authenticate,
  UserController.updateSubject
);
router.put("/update/:id/myGrid", authenticate, UserController.updateMyGrid);

module.exports = router;
