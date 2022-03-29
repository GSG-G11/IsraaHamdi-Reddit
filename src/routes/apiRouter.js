const express = require('express');
const { signUpController, signInController } = require('../controllers');
const apiRouter = express.Router();

apiRouter.post ('/signUp', signUpController);
apiRouter.post ('/signIn', signInController);

module.exports = apiRouter ;