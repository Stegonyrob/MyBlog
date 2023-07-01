var express = require("express");
const sequelize = require("../db/connection");
var router = express.Router();

//GET posts with user info of following users
router.get("/why", async (req, res) => {
  try {
    const posts = await sequelize.query(
      `SELECT *
      FROM posts`,
      { type: sequelize.QueryTypes.SELECT }
    );
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

//POST posts
router.post("/", async function (req, res) {
  try {
    const { post_id_user, post_content } = req.body;
    const newPost = await sequelize.query(
      `INSERT INTO post (post_id_user, post_content) VALUES (?, ?)`,
      {
        type: sequelize.QueryTypes.INSERT,
        replacements: [post_id_user, post_content],
      }
    );
    res.status(200).json({
      post_id: newPost[0],
      post_id_user,
      post_content,
    });
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
