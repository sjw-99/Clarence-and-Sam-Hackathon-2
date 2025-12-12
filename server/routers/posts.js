require("dotenv").config();

const { Router } = require("express");

const postsController = require("../controllers/posts");

const postsRouter = Router();

postsRouter.get("/", postsController.index);

// Export the router
module.exports = postsRouter;
