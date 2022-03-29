const express = require('express');
const { signUpController } = require('../controllers');
const apiRouter = express.Router();

apiRouter.post ('/signUp', signUpController);

module.exports = apiRouter ;