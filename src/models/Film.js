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
      classificacao: {
        type: Sequelize.DataTypes.INTEGER,
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
      
      rating: {
        type: Sequelize.DataTypes.INTEGER,
      },
    
      user_id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      
      timestamps: false,
    }
  );
  
  

  module.exports = Film;