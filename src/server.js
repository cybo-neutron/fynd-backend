require("dotenv").config();
const express = require("express");
const cors = require("cors");
const user = require("./routes/user");
const movie = require("./routes/movie");

require("./config/db-connect");

const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/user", user);
app.use("/api/movies", movie);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
