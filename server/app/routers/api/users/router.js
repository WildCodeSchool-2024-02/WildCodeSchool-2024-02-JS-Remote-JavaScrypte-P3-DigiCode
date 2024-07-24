const express = require("express");

const router = express.Router();

// import actions
const {
  browse,
  read,
  edit,
  updateUserName,
  add,
  destroy,
} = require("../../../controllers/userActions");
const hashPassword = require("../../../services/hashPassword");
const userValidation = require("../../../services/validation/userValidation");

// get a list of all users
router.get("/", browse);

// route to get a specific user
router.get("/:id", read);

// route to edit an existing user
router.put("/:id", hashPassword, edit);

// route to update user name
router.put("/:id/name", updateUserName);

// route to add a new user
router.post("/register", userValidation, hashPassword, add);

// route to delete an existing user
router.delete("/:id", destroy);

module.exports = router;
