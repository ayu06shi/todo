const express = require("express");
const router = express.Router();

// importing controllers
const { signupController, loginController } = require('../controllers/authControllers');

// signup
router.post('/signup', signupController); //('/route', controller_name)

// login
router.post('/login', loginController); //('/route', controller_name)

module.exports = router;