const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: "Please enter a date for the workout.",
  },
  exercises: [
    {
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
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
