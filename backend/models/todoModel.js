const mongoose = require('mongoose');

// Define Todo schema
const todoSchema = new mongoose.Schema({
  task: String,
});

// Create Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
