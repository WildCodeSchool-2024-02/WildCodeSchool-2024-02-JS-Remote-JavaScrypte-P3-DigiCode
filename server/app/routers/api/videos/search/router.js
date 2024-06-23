const express = require("express");

const router = express.Router();

// action
const { query } = require("../../../../controllers/videoActions");

// route to search videos
router.get("/:search", query);

module.exports = router;
