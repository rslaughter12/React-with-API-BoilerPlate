// server/config/connection.js
const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/workoutLog');

connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  

module.exports = connection;