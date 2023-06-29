const express = require("express");
const router = express.Router();
const { pool } = require("../db");

// Endpoint para obtener todas las publicaciones de "stee"
router.get("/postfeed", async function (req, res) {
  try {
    const posts = await pool.query(
      `SELECT post.title, post.image, post.content, post.creation_date, user.username
      FROM post
      INNER JOIN user ON post.post_id_user = user.id
      WHERE post.post_id_user = 'stee'
      ORDER BY post.post_id DESC`,
      []
    );
    res.status(200).json(posts);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

// Endpoint para que los usuarios hagan comentarios en las publicaciones de "stee"
router.post("/postcomment", async function (req, res) {
  const { post_id, comment } = req.body;

  try {
    const newComment = await pool.query(
      "INSERT INTO comment (post_id, content) VALUES (?, ?)",
      [post_id, comment]
    );
    res.status(200).json({ comment: newComment.insertId });
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

// Endpoint para que los usuarios den "me gusta" o "no me gusta" a las publicaciones de "stee"
router.post("/like", async function (req, res) {
  const { post_id } = req.body;

  try {
    const likeCount = await pool.query(
      "SELECT like_count FROM post WHERE id = ?",
      [post_id]
    );

    if (likeCount[0].like_count === 0) {
      await pool.query("UPDATE post SET like_count = 1 WHERE id = ?", [
        post_id,
      ]);
      res.status(200).send({ like: "Me gusta" });
    } else {
      await pool.query(
        "UPDATE post SET like_count = like_count - 1 WHERE id = ?",
        [post_id]
      );
      res.status(200).send({ like: "No me gusta" });
    }
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
