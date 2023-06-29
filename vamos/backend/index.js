const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "tu_usuario_mysql",
  password: "tu_contraseña_mysql",
  database: "soy_linux",
  waitForConnections: true,
  connectionLimit: 10,
});

app.get("/posts", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM posts");
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los posts" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
