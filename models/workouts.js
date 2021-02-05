const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
        },
        name: {
          type: String,
          trim: true,
        },
        duration: {
          type: Number,

          max: [60, "One hour is the max duration"],
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
  }
  // {
  //   toObject: {
  //     virtual: true,
  //   },
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

// workoutSchema.virtual("totalDuration").get(() => {
//   return this.duration.reduce(
//     (currentValue, previousValue) => currentValue + previousValue
//   );
// });

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
