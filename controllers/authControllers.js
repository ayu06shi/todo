const User = require('../models/userModel');

const { hashPassword, comparePassword } = require('../helper/authHelper');
const jwt = require('jsonwebtoken');

const signupController = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        
        if(!name || !email || !password){
            return (
                res.sendStatus(403).send({
                    success: false,
                    message: 'Provide Complete Details'
                })
            )
        }

        const user = await User.findOne({ email }); 

        if(user){
            return (
                res.sendStatus(400).send({
                    success: false,
                    message: 'This email already exists'
                })
            )
        }

        const hashedPassword = await hashPassword(password)
        const userData = {name, email, password: hashedPassword}

        const newUser = await User.create(userData);

        const userToReturn = {...newUser.toJSON()};
        delete userToReturn.password; // Removing password field for security

        return res.sendStatus(200).send({
            success: true,
            message: 'User Registration Successful',
            user: userToReturn
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(500).send({
            success: false,
            message: "Error in Registration",
            error: error.message,
        });
    }
}

const loginController = async(req, res) =>{
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return (
                res.sendStatus(403).send({
                    success: false,
                    message: 'Provide Complete Details'
                })
            )
        }

        const user = await User.findOne({ email });

        if(!user){
            return (
                res.sendStatus(400).send({
                    success: false,
                    message: 'Email is not registered'
                })
            )
        }

        const isPasswordValid = await comparePassword(password, user.password);

        if(!isPasswordValid){
            return (
                res.sendStatus(403)({
                    success: false,
                    message: 'Invalid Password'
                })
            )
        }

        // create jwtoken
        const token = await jwt.sign({
            _id: user._id
        }, process.env.JWT_SECRETKEY, {expiresIn: '12d'});

        const userToReturn = {...user.toJSON()};
        delete userToReturn.password; // Removing password field for security

        return (
            res.status(200).send({
                success: true,
                message: 'Login Successfull',
                userToReturn,
                token: token
            })
        )
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success: false,
            message: 'Error in Login',
            error
        });
    }
}

module.exports = { signupController, loginController };