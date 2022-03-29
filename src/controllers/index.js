const { clientError, serverError } = require('./errors');
const { signUpPage, signUpController } = require('./signUp');

module.exports = {
  clientError,
  serverError,
  signUpPage,
  signUpController,
};
