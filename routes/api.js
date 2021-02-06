const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      const dbWorkout = data[data.length - 1];
      res.json({
        _id: dbWorkout._id,
        day: dbWorkout.day,
        exercises: dbWorkout.exercises,
      });
    })
    .catch((err) => {
      res.status(422).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  Workout.findByIdAndUpdate(
    id,
    { $push: { exercises: [req.body] } },
    (err, dbWorkout) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(dbWorkout);
    }
  ).catch((err) => {
    res.status(422).json(err);
  });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      // Workout.aggregate([
      //   {
      //     $addFields: {
      //       totalDuration: { $sum: "$exercises.duration" },
      //     },
      //   },
      // ]).then((totalDuration) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
