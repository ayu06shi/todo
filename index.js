const express = require('express');
const app = express();

// importing routes
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

// dotenv
require('dotenv').config();
const port = process.env.PORT || 3500

// cors
const cors = require('cors');
app.use(cors());

// middleware
app.use(express.json());

// database connection
const dbConnect = require('./config/dbConnect');
dbConnect();

// mounting of routes
app.use('/user', authRoutes);
app.use('/todo', todoRoutes);


app.listen(port, () => {
    console.log(`Server started at ${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello World");
})