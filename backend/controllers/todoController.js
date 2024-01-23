const Todo = require('../models/todoModel');

const createTodo = async (req, res) => {
  try {
    console.log(req)
    const { task } = req.body;
    
   

    if (!task) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const newTodo = await Todo.create({
      // id: Date.now(),
      task: task,
    });

    const todos = await Todo.find();
    res.status(201).json(todos);
  } catch (error) {
    console.log(error)
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error('Error retrieving todos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




const updateTodo = async (req, res) => {
  try {
    console.log(" i am in updated phase ")
    const { id } = req.params;
    const { text } = req.body;

    const updatedTodo = await Todo.findOneAndUpdate(
      { id: parseInt(id) },
      { $set: { text: text } },
      { returnDocument: 'after' }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await Todo.deleteOne({_id:id});
    // console.log(result)
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
