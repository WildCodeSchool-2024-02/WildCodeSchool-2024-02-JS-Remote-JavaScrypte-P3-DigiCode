const express = require("express");

const router = express.Router();

// define API routes

// import video-related actions
const { browse, read, add } = require("../../../controllers/videoActions");

// route to get a list of videos
router.get("/", browse);

// route to get a specific video by id
router.get("/:id", read);

// route to add a new video
router.post("/", add);

module.exports = router;
