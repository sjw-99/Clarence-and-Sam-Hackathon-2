const Post = require("../models/Post.js");

async function index(req, res) {
  try {
    const posts = await Post.getAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  index,
};