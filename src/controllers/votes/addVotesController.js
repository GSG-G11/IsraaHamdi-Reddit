const { userVotes, addVotesQuery } = require("../../database/queries");

const addVotesController = (req,res,next) => {
    const {user_id} =req.body;
    const {post_id} =req.params;
    userVotes(user_id,post_id)
    .then(data=>{
        if(data.rowCount === 0) {
            addVotesQuery(user_id,post_id)
        } else {
           return  res.status(400).json({status:400, message:'You voted before'});
        }
    })
    .then (()=>{
        res.status(201).json({status:201, message:'voted successfully :)'})})
    .catch(err=>next(err))
}
module.exports = addVotesController;