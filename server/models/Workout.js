// server/models/Workout.js
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils');

const exerciseSchema = new Schema(
    {
        exerciseName: {
            type: String,
            required: true
        },
        sets: {
            type: Number,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            required: true
        }
    }
);

const workoutSchema = new Schema(
    {
        workoutName: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            get: (dateVal) => dateFormat(dateVal)
        },
        exercises: [exerciseSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

workoutSchema.virtual('exerciseCount').get(function () {
    return this.exercises.length;
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;

