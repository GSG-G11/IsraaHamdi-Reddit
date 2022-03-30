const { addUserQuery, getUserByEmailQuery, getUserNameQuery } = require('./user');
const { getPostsQuery, addPostQuery, getPostForUserQuery }= require('./post'); 
const { getCommnetsQuery, addCommnetsQuery } = require('./comments');
const { userVotes, addVotesQuery, deleteVotesQuery, countVotesQuery} = require('./votes')

module.exports = {
    addUserQuery,
    getUserByEmailQuery,
    getPostsQuery,
    getCommnetsQuery,
    addPostQuery,
    getUserNameQuery,
    getPostForUserQuery,
    addCommnetsQuery,
    userVotes,
    addVotesQuery, 
    deleteVotesQuery,
    countVotesQuery,
};
