const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "soy_linux",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
