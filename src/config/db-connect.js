const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

mongoose.set("strictQuery", false);
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to DB");
});
