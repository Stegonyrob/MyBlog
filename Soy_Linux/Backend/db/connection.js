const Sequelize = require("sequelize");
const path = "mysql://root@localhost:3306/soy_linux";
const sequelize = new Sequelize(path, { operatorAliases: false });

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado: soy_linux base de datos");
  })
  .catch((err) => {
    console.error("Error de conexión:", err);
  });

module.exports = sequelize;
