const express = require("express");

const router = express.Router();

// import actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
} = require("../../../controllers/userActions");
const hashPassword = require("../../../services/hashPassword");
const validateFormData = require("../../../services/validateFormData");

// get a list of all users
router.get("/", browse);

// route to get a specific user
router.get("/:id", read);

// route to edit an existing user
router.put("/:id", hashPassword, edit);

// route to add a new user
router.post("/register", validateFormData, hashPassword, add);

// route to delete an existing user
router.delete("/:id", destroy);

// route for a user to login
router.post("/login", login);

module.exports = router;
