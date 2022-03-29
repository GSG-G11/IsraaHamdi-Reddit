const { addUserQuery, getUserByEmailQuery, getUserNameQuery } = require('./user');
const { getPostsQuery, addPostQuery, getPostForUserQuery }= require('./post'); 
const { getCommnetsQuery } = require('./comments');

module.exports = {
    addUserQuery,
    getUserByEmailQuery,
    getPostsQuery,
    getCommnetsQuery,
    addPostQuery,
    getUserNameQuery,
    getPostForUserQuery,
};
