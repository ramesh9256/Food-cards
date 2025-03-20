const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  starRating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  foods: {
    type: [String],
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
