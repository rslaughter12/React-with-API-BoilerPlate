// server/Routes/apiRoutes/userRoutes.js
const router = require("express").Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// GET all users
router.get('/', getUsers) 

// // GET a single user by id
router.get('/:userId', getUserById);

// // POST a new user
router.post('/', createUser);

// // PUT to update a user by id
router.put('/:userId', updateUser);

// // DELETE a user by id
router.delete('/:userId', deleteUser);

// // POST to add a friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// // DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;