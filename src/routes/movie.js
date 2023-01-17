const router = require("express").Router();
const Movie = require("../models/movie.model");
router.get("/", async (req, res) => {
  //   res.send("All movies");
  const response = await Movie.find();
  res.json(response);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  const { name, imdb, director, genre, popularity } = req.body;
  Movie.create({ name, imdb, director, genre, popularity });
});

router.get("/:name", async (req, res) => {
  const movieName = req.params.name;
  const response = await Movie.find({ name: movieName });
  res.json(response);
});

module.exports = router;
