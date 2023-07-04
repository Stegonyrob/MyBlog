const express = require("express");
const sequelize = require("../db/connection");
const router = express.Router();
const Post = require("../models/modelPost");
const upload = require("./multerMiddleware");

// POST /posts
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const imageUrl = req.file ? req.file.filename : null;

    // Guardar la URL de la imagen en la base de datos
    const newPost = await sequelize.query(
      "INSERT INTO posts (title, content, image) VALUES (?, ?, ?)",
      {
        type: sequelize.QueryTypes.INSERT,
        replacements: [title, content, imageUrl],
      }
    );

    res.status(200).json({
      title,
      content,
      image: imageUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar la imagen" });
  }
});

//GET all post
router.get("/why", async (req, res) => {
  try {
    const posts = await sequelize.query(
      "SELECT * FROM posts ORDER BY createdAt DESC",
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

//POST posts
router.post("/send", upload.single("image"), async function (req, res) {
  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;
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

//Put posts for id post
router.put("/why/:id", upload.single("image"), async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : req.body.image;
    const createdAt = new Date().toISOString().slice(0, 19).replace("T", " ");
    const query = `UPDATE posts SET title=?, content=?, image=?, createdAt=? WHERE id=?`;
    const parameters = [title, content, image, createdAt, postId];
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
//Delete post
router.delete("/why/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const query = `DELETE FROM posts WHERE id=?`;
    const parameters = [postId];

    const [deletedRowsCount] = await sequelize.query(query, {
      replacements: parameters,
    });

    if (deletedRowsCount === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
