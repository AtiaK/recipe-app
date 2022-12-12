const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Ingredients: {
    type: Array,
    required:true
  },
  Cuisine: {
    type: String,
    required:true
  }
},{timestamps:true});

module.exports = mongoose.model("recipe", RecipeSchema);
