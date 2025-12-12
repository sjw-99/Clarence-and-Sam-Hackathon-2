const express = require("express");

const cors = require("cors");

const logger = require("./logger");

const postsRouter = require("./routers/posts");

const app = express();

app.use(cors());

app.use(logger);

app.use(express.json());

app.use("/posts", postsRouter);

module.exports = app;
