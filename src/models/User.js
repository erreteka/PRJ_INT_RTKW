const db = require("../config/sequelize");
const Sequelize = require("sequelize");
const Film = require("./Film");
const Rating = require("./rating");

const User = db.define(
    "User",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      phone: {
        type: Sequelize.DataTypes.INTEGER,
      },
      birthdate: {
        type: Sequelize.DataTypes.DATE,
      },
    },
    {
      
      timestamps: false,
    }
  );
  
  User.hasMany(Rating, {
    foreignKey: "user_id",
  });
  Rating.belongsTo(User, {
    foreignKey: "user_id",
  });

  User.hasMany(Film, {
    foreignKey: "user_id",
  });
  Film.belongsTo(User, {
    foreignKey: "user_id",
  });

module.exports = User;