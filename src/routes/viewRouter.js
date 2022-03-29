const express = require('express');
const { signUpPage } = require('../controllers');

const viewRouter = express.Router();

viewRouter.get('/signUp', signUpPage)

module.exports = viewRouter ;