const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const videosRouter = require("./videos/router");

router.use("/videos", videosRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter)
/* ************************************************************************* */

module.exports = router;
