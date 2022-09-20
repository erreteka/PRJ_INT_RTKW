const Sequelize = require("sequelize");
const configDB = require("./database");
const sequelize = new Sequelize(config);

module.exports = sequelize;