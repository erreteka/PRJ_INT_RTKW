const db = require("../config/sequelize");
const Sequelize = require("sequelize");
const Film = require("./film");
const RatingFilm = require("./RatingFilm");

const Rating = db.define(
    "Rating",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      create_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM("avaliar", "avaliado"),
        defaultValue: "avaliar",
        allowNull: false,
      },
      
      user_id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      
      timestamps: false,
    }
  );
  
  Film.belongsToMany(Rating, {
    through: RatingFilm,
    foreignKey: "film_id",
  });
  Rating.belongsToMany(Film, {
    through: RatingFilm,
    foreignKey: "rating_id",
  });

  module.exports = Rating;