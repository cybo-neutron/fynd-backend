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

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const response = await Movie.findByIdAndDelete(id);
    res.status(200).send("Deleted successfully");
  } catch (err) {
    res.status(400).send("Unable to delete");
  }
});

module.exports = router;
