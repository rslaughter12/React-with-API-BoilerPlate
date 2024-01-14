// server/Routes/apiRoutes/workoutRoutes.js
const router = require('express').Router(); 
const {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkoutById,
    deleteWorkoutById,
    addExercise,
    deleteExercise
    } = require('../../controllers/workoutController');

// GET all workouts
router.get('/', getAllWorkouts);
router.get('/:id', getWorkoutById);
router.post('/', createWorkout);
router.put('/:id', updateWorkoutById);
router.delete('/:id', deleteWorkoutById);
router.post('/:workoutId/exercises', addExercise);
router.delete('/:workoutId/exercises/:exerciseId', deleteExercise);

module.exports = router;
