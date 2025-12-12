const db = require("../db/connect");

class Post {
  constructor({ post_id, date, time, category, club, title, text, keywords }) {
    this.post_id = post_id;
    this.date = date;
    this.time = time;
    this.category = category;
    this.club = club;
    this.title = title;
    this.text = text;
    this.keywords = keywords;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM posts;");

    if (response.rows.length === 0) {
      throw new Error("No posts available, sorry!");
    }

    return response.rows.map((p) => new Post(p));
  }
}

module.exports = Post;
