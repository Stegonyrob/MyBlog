const express = require("express");
const router = express.Router();
const { pool } = require("../db");

// GET posts with title, image, content, and creation date
router.get("/feed/:id", async function (req, res) {
  const loggedId = req.params.id;

  try {
    const posts = await pool.query(
      `SELECT post.title, post.image, post.content, post.creation_date, user.username
      FROM post
      JOIN user ON user.id = post.post_id_user
      WHERE post.post_id_user IN (SELECT friend.user_friend2_id FROM friend WHERE friend.user_friend1_id = ?)
      OR post.post_id_user = ?
      ORDER BY post.post_id DESC`,
      [loggedId, loggedId]
    );
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

// POST posts
router.post("/", async function (req, res) {
  try {
    const { post_id_user, post_title, post_image, post_content } = req.body;
    const newPost = await pool.query(
      "INSERT INTO post (post_id_user, title, image, content) VALUES (?, ?, ?, ?)",
      [post_id_user, post_title, post_image, post_content]
    );
    res.status(200).json({
      post_id: newPost.insertId,
      post_id_user,
      post_title,
      post_image,
      post_content,
    });
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
