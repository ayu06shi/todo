const mongoose = require('mongoose');

require('dotenv').config();
const url = process.env.MONGO_URI;

const dbConnect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Database Connected"))
    .catch((error) => {
        console.log("Database Connection Error: ", error);
        process.exit(1);
    })
}

module.exports = dbConnect;