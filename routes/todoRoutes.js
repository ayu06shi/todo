const express = require('express');
const router = express.Router();

// importing cpntrollers
const { addTodoController, getTodoController, deleteTodoController, updateTodoController } = require('../controllers/todoControllers')

// add Todo
router.post('/addTodo', addTodoController);

// get Todo
router.post('/getTodo', getTodoController);

// delete Todo
router.post('/deleteTodo', deleteTodoController);

// update Todo
router.post('/updateTodo', updateTodoController);

module.exports = router;