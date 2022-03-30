const { userVotes, deleteVotesQuery } = require('../../database/queries');

const deleteVotesController = (req,res,next) => {
    const {user_id} =req.body;
    const {post_id} =req.params;
    userVotes(user_id,post_id)
    .then(data=>{
        if(data.rowCount !== 0) {
            deleteVotesQuery(user_id,post_id)
        } else {
            res.status(400).json({status:400,message:'You don\'t  voted before'});
        }
    })
    .then (()=>res.status(201).json({status:201,message:'Vote removed successfully :)'}))
    .catch(err=>next(err))
}
module.exports =  deleteVotesController;