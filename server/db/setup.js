require("dotenv").config();

const path = require("path");

const fs = require("fs");

const db = require("./connect");

const sql = fs.readFileSync(path.join(__dirname, "posts.sql")).toString();

db.query(sql)
  .then((data) => {
    db.end();
    console.log("Database Setup Completed.");
  })
  .catch((error) => console.log(error));
