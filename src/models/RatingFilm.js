const Sequelize = require("sequelize");
const db = require("../config/sequelize");

const RatingFilm = db.define(
  "RatingFilm",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    rating_id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    film_id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    timestamps: false,
    tableName: "ratings_films",
  }
);
module.exports = RatingFilm;