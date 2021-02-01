const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    default: "resistance",
  },
  name: {
    type: String,
    trim: true,
    required: "Please name the exercise.",
  },
  duration: {
    type: Number,
    min: [5, "Duration too short."],
    max: [60, "One hour is the max duration"],
    required: "Please enter how long the exercise will be.",
  },
  weight: {
    type: Number,
    max: 1000,
  },
  reps: {
    type: Number,
    max: 1000,
  },
  sets: {
    type: Number,
    max: 1000,
  },
  distance: {
    type: Number,
    max: 250,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
