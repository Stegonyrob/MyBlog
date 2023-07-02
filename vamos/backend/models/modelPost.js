const { Model, DataTypes } = require("sequelize");

const sequelize = require("../db/connection");
class Post extends Model {}

Post.init(
  {
    // Definir los campos de la tabla 'posts'
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "posts",
  }
);

// Resto del código de tu archivo

module.exports = Post;
