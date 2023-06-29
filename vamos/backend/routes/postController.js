const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "tu_usuario_mysql",
  password: "tu_contraseña_mysql",
  database: "soy_linux",
  waitForConnections: true,
  connectionLimit: 10,
});

exports.getAllPosts = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM posts");
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los posts" });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Se requiere un título y contenido" });
  }

  try {
    const connection = await pool.getConnection();
    await connection.query("INSERT INTO posts (title, content) VALUES (?, ?)", [
      title,
      content,
    ]);
    connection.release();
    res.status(201).json({ message: "Post creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el post" });
  }
};
