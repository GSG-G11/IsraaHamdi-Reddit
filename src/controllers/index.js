const { clientError, serverError } = require('./errors');
const { signUpPage, signUpController } = require('./signUp');
const { signInPage, signInController } = require('./signIn');

module.exports = {
  clientError,
  serverError,
  signUpPage,
  signUpController,
  signInPage,
  signInController,
};
