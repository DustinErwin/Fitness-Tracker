const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: "Enter a date for the workout",
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
        required: "Please name the workout.",
      },
      duration: {
        type: Number,
        min: [5, "Duration too short."],
        max: [60, "One hour is the max duration"],
        required: "Please enter how long the workout will be.",
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
