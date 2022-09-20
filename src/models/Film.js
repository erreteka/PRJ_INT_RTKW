const db = require("../config/sequelize");
const Sequelize = require("sequelize");
const Rating = require("./Rating");
const RatingFilm = require("./RatingFilm");


const Film = db.define(
    "Film",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.DataTypes.STRING(100),
        
        allowNull: false,
      },
      descricao: {
        type: Sequelize.DataTypes.STRING(100),
        
        allowNull: false,
      },
      genero: {
        type: Sequelize.DataTypes.STRING(100),
        
        allowNull: false,
      },
      produtora: {
        type: Sequelize.DataTypes.STRING(100),
        
        allowNull: false,
      },
      ano: {
        type: Sequelize.DataTypes.INTEGER,
      },
      diretor: {
        type: Sequelize.DataTypes.STRING(100),
        
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      
      timestamps: true,
    }
  );
  
  

  module.exports = Film;