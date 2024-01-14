// server/controllers/userController.js
const { User, Thought } = require('../models');

// GET all users
const getUsers = async (req, res) => {
    console.log('GET all users');
    try {
        const userData = await User.find({});
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

// GET a single user by its _id 
const getUserById = async (req, res) => {
    console.log('GET a single user by its _id');
    try {
        const userData = await User.findOne({ _id: req.params.userId });
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
// Create a new user
const createUser = async (req, res) => {
    console.log('Create a new user');
    try {
        const userData = await User.create(req.body);
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

// Update a user by its _id
const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};



// Delete User
const deleteUser = async (req, res) => {
    console.log('Delete User');
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        await Thought.deleteMany({ username: user.username });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

const addFriend = async (req, res) => {
    console.log('Add Friend');
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

const removeFriend = async (req, res) => {
    console.log('Remove Friend');
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};







module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
};