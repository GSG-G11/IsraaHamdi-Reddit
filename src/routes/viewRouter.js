const express = require('express');
const { signUpPage, signInPage, postsController } = require('../controllers');

const viewRouter = express.Router();

viewRouter.get('/signUp', signUpPage);
viewRouter.get('/signIn', signInPage);
viewRouter.get('/posts', postsController);

module.exports = viewRouter ;