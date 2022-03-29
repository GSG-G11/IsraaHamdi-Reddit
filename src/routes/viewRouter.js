const express = require('express');
const { signUpPage, signInPage } = require('../controllers');


const viewRouter = express.Router();

viewRouter.get('/signUp', signUpPage)
viewRouter.get('/signIn', signInPage)

module.exports = viewRouter ;