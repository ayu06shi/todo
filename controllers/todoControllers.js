const Todo = require('../models/todo');


const addTodoController = async(req, res) => {
    try {
        const { title, description, tags } = req.body;

        if(!title || !description || !tags){
            return (
                res.status(403).send({
                    success: false,
                    message: 'Provide Complete Details'
                })
            )
        }

        const userData = {title, description, tags}

        const newTodo = await Todo.create(userData);

        const todoToReturn = {...newTodo.toJSON()};

        return res.status(200).send({
            success: true,
            message: 'Todo Added Successfully',
            todo: todoToReturn
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in adding Todo',
            error: error.message
        })
    }
}

const getTodoController = async(req, res) => {
    try {
        const todos = Todo.find();

        return res.status(200).json({
            success: true,
            message: "Todos fetched successfully",
            todos
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Todo fetch unsuccessful',
            error: error.message
        })
    }
}

const deleteTodoController = async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if(!todo) {
            return (
                res.status(404).json({
                    success: false,
                    message: "Todo not found"
                })
            )
        }

        return (
            res.status(200).send({
                success: true,
                message: "Todo Deleted Successfully"
            })
        )
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Unable to delete Todo",
            error: error.message,
        })
    }
}

const updateTodoController = async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if(!todo){
            return (
                res.status(404).send({
                    message: 'Todo not found',
                })
            )
        }

        Todo.findByIdAndUpdate(todo._id, (error, todo) => {
            
            if(error){
                return res.status(400).send({
                    message: 'Error in Updating Todo'
                });
            }

            return res.status(200)
            console.log(todo.title);
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Updating Todo',
            error: error.message
        })
    }
}

module.exports = { addTodoController, getTodoController, deleteTodoController, updateTodoController };