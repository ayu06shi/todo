const bcrypt = require('bcrypt');

// function to hash password
const hashPassword = async(password) => {
    try{
        const hashPassword = await bcrypt.hash(password, 10);
        return hashPassword;
    }
    catch(error){
        console.log("Error in hashing password", error);
    }
}

// function to compare password
const comparePassword = async(password, hashPassword) => {
    return bcrypt.compare(password, hashPassword);
}

module.exports = { hashPassword, comparePassword };