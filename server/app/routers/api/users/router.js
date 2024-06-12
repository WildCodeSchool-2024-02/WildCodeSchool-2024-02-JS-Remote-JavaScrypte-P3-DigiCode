const express = require("express");

const router = express.Router();

// import actions
const { browse, read, edit, add, destroy } = require("../../../controllers/userActions");

// get a list of all users
router.get("/", browse);

// route to get a specific user
router.get("/:id", read);

// route to edit an existing user
router.put("/:id", edit);

// route to add a new user
router.post("/", add);

//route to delete an existing user
router.delete("/:id", destroy)

module.exports = router;