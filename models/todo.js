const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    // status: {
    //     type: String,
    //     enum: ['Just Started', 'In Progress', 'Completed'],
    //     required: true
    // },
    // deadline: {
    //     type: String,
        
    // }
}, {timestamps: true})

// export
module.exports = mongoose.model("Todo", todo);