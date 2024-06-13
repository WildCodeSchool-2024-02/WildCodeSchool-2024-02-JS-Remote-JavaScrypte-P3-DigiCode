const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router")

router.use("/users", usersRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;
