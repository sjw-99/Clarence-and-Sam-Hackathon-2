const { Router } = require("express");

const postsController = require("../controllers/countries");

const postsRouter = Router();

postsRouter.get("/", postsController.index);

// Export the router
module.exports = postsRouter;
