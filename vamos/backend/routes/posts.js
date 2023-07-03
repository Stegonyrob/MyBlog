const express = require("express");
const sequelize = require("../db/connection");
const router = express.Router();
const Post = require("../models/modelPost");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

//GET all post
router.get("/why", async (req, res) => {
  try {
    const posts = await sequelize.query(
      `SELECT *
      FROM posts `,
      { type: sequelize.QueryTypes.SELECT }
    );
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

//GET posts for id post
router.get("/why/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findOne({
      where: {
        id: postId,
      },
      attributes: ["title", "content", "image", "createdAt"],
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const { title, content, image, createdAt } = post;

    res.status(200).json({
      title,
      content,
      image,
      createdAt,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Internal server error" });
  }
});

//POST posts
router.post("/send", upload.single("image"), async function (req, res) {
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
//Get about
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

//Put posts for id post
router.put("/why/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;
    const createdAt = new Date().toISOString().slice(0, 19).replace("T", " "); // Cambio: usar createdAt en lugar de updatedAt

    const query = `UPDATE posts SET title=?, content=?, image=?, createdAt=? WHERE id=?`; // Cambio: usar createdAt en lugar de updatedAt
    const parameters = [title, content, image, createdAt, postId]; // Cambio: usar createdAt en lugar de updatedAt

    const [updatedRowsCount] = await sequelize.query(query, {
      replacements: parameters,
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({
      title,
      content,
      image,
      createdAt,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Internal server error" });
  }
});
module.exports = router;
