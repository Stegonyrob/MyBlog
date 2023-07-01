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
router.post("/send", async function (req, res) {
  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null; // Obtener el nombre de archivo guardado por Multer
    const newPost = await sequelize.query(
      `INSERT INTO posts (title, content, image) VALUES (?, ?, ?)`,
      {
        type: sequelize.QueryTypes.INSERT,
        replacements: [title, content, image],
      }
    );
    res.status(200).json({
      title,
      content,
      image,
    });
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});
router.get("/abaut", async (req, res) => {
  try {
    const posts = await sequelize.query(
      `SELECT *
      FROM abaut`,
      { type: sequelize.QueryTypes.SELECT }
    );
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});
module.exports = router;
