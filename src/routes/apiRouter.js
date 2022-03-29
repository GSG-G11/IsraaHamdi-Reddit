const express = require('express');
const { 
    signUpController,
    signInController,
    getCommentsController,
    homePageController,
    logOutController,
    addPostController,
    userNameController, 
    profileUserPageController,
    profileUserController,
    } = require('../controllers');
const verifyUser = require('../middleware');
const apiRouter = express.Router();

apiRouter.post('/signUp', signUpController);
apiRouter.post('/signIn', signInController);
apiRouter.get('/posts/:id', getCommentsController);
apiRouter.get('/home',verifyUser, homePageController);
apiRouter.post('/addPost',verifyUser,addPostController)
apiRouter.get('/logout',verifyUser, logOutController);
apiRouter.get('/user/name',verifyUser, userNameController);
apiRouter.get('/profile',verifyUser, profileUserPageController);
apiRouter.get('/profile/user',verifyUser, profileUserController);
apiRouter.get('/posts/user',verifyUser, userNameController);

module.exports = apiRouter ;