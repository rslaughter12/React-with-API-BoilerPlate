// server/controllers/workoutController.js
const Workout = require('../models/Workout');
const User = require('../models/User');

// get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workoutData = await Workout.find();
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
}

// get workout by id
const getWorkoutById = async (req, res) => {
    try {
        const workoutData = await Workout.findById(req.params.id);
        if (!workoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
}

// create a workout
const createWorkout = async (req, res) => {
    try {
        const workoutData = await Workout.create(req.body);
        const userData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { workouts: workoutData._id } },
            { new: true }
        );
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(workoutData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

// update workout by id
const updateWorkoutById = async (req, res) => {
    try {
        const workoutData = await Workout.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!workoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
}

// delete workout by id
const deleteWorkoutById = async (req, res) => {
    try {
        const workoutData = await Workout.findOneAndDelete({ _id: req.params.id });
        if (!workoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }
        const userData = await User.findOneAndUpdate(
            { username: workoutData.username },
            { $pull: { workouts: workoutData._id } },
            { new: true }
        );
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json({ message: 'Workout deleted!' });
    } catch (err) {
        res.status(400).json(err);
    }
}

// add exercise to workout
const addExercise = async (req, res) => {
    try {
        const workoutData = await Workout.findOneAndUpdate(
            { _id: req.params.workoutId },
            { $push: { exercises: req.body } },
            { new: true }
        );
        if (!workoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
}

// delete exercise from workout
const deleteExercise = async (req, res) => {
    try {
        const workoutData = await Workout.findOneAndUpdate(
            { _id: req.params.workoutId },
            { $pull: { exercises: { _id: req.params.exerciseId } } },
            { new: true }
        );
        if (!workoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = {  
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkoutById,
    deleteWorkoutById,
    addExercise,
    deleteExercise
};
