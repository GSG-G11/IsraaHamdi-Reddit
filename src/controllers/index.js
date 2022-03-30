const { clientError, serverError } = require('./errors');
const { signUpPage, signUpController } = require('./signUp');
const { signInPage, signInController } = require('./signIn');
const { postsController,homePageController, addPostController } = require('./posts');
const { getCommentsController,addCommentsController } = require('./comments');
const logOutController = require('./logOutController')
const { userNameController, profileUserController, profileUserPageController } = require('./users');
const { addVotesController, countVotesController, deleteVotesController } = require('./votes');

module.exports = {
  clientError,
  serverError,
  signUpPage,
  signUpController,
  signInPage,
  signInController,
  postsController,
  getCommentsController,
  homePageController,
  logOutController,
  addPostController,
  userNameController,
  profileUserController,
  profileUserPageController,
  addCommentsController,
  addVotesController,
  countVotesController,
  deleteVotesController
};
