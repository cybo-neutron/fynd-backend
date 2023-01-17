const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  isAdmin: Boolean,
});

export default mongoolse.model("User", UserSchema);
