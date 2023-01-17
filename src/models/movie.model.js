const mongoose = require("mongoose");

const MovieModel = mongoose.Schema({
  name: String,
  imdb: String,
  director: String,
  genre: String,
  popularity: String,
});

const Movie = mongoose.model("Movie", MovieModel);

module.exports = Movie;
