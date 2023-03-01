const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: Array,
});
module.exports = mongoose.model("userModel", userSchema);
