/* eslint-disable camelcase */
const tables = require("../../database/tables");

// Browse
const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Read
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await tables.user.readById(id);

    if (user != null) res.json(user);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

// Edit
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, password, birthdate, role_id } =
      req.body;
    const user = await tables.user.update(
      firstname,
      lastname,
      email,
      password,
      birthdate,
      role_id,
      id
    );

    res.sendStatus(204).json({ updatedUserInfo: user });
  } catch (error) {
    next(error);
  }
};

// Add
const add = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, birthdate, role_id } =
      req.body;
    const user = await tables.user.create(
      firstname,
      lastname,
      email,
      password,
      birthdate,
      role_id
    );

    res.sendStatus(204).json({ newUser: user });
  } catch (error) {
    next(error);
  }
};

// Destroy
const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await tables.user.destroy(id);

    res.sendStatus(204).json({ removed: deletedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, edit, add, destroy };
