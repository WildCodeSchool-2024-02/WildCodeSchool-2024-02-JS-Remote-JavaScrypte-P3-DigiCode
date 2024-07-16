const express = require("express");

const router = express.Router();

const {
  login,
  logout,
  checkAuth,
} = require("../../../controllers/authController");
const validateAuth = require("../../../services/validation/authValidation");

router.post("/login", validateAuth, login);
router.get("/checkauth", checkAuth);
router.get("/logout", logout);

module.exports = router;
