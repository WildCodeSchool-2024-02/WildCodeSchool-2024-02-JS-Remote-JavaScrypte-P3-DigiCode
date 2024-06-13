/* eslint-disable camelcase */
// import access to database tables
const tables = require("../../database/tables");

// Browse (read all)

const browse = async (req, res, next) => {
  try {
    // fetch all videos from the database
    const videos = await tables.videos.readAll();

    res.status.json(videos);
  } catch (err) {
    // pass any errors to the error-handling middleware
    next(err);
  }
};

// Read
const read = async (req, res, next) => {
  try {
    // get the id of the video from the request body
    const { id } = req.params;
    // fetch a specific video from the database based on the provided id
    const video = await tables.video.read(id);

    // if the video is not found, respond with (http) 404 (not found)
    // otherwise respond with the video in json format
    if (video == null) {
      res.sendStatus(404);
    } else {
      res.status.json(video);
    }
  } catch (err) {
    // pass any errors to the error-handling middleware
    next(err);
  }
};

// Edit
const edit = async (req, res, next) => {
  try {
    const {
      name,
      url,
      image,
      description,
      date,
      is_premium,
      is_free,
      requires_account,
      category_id,
    } = req.body;

    const video = await tables.video.edit(
      name,
      url,
      image,
      description,
      date,
      is_premium,
      is_free,
      requires_account,
      category_id
    );
    res.sendStatus(204).json({ updated: video });
  } catch (err) {
    next(err);
  }
};

// Add (create)

const add = async (req, res, next) => {
  // extract the video data from the request body
  const video = req.body;

  try {
    // insert the video into the databse
    const insertId = await tables.video.create(video);

    // respond with http 201 (created) and the id of the newly inserted video
    res.status(201).json({ insertId });
  } catch (err) {
    // pass any errors to the error-handling middleware
    next(err);
  }
};

// Delete (destroy)

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedVideo = await tables.video.destroy(id);

    res.sendStatus(204).json({ removed: deletedVideo });
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, edit, add, destroy };
