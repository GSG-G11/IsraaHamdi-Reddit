const {  countVotesQuery } = require("../../database/queries");

const countVotesController = (req,res,next) => {
    const {post_id} =req.params;
    countVotesQuery(post_id)
    .then(data=>{
        console.log(data.rows[0].count)
       res.status(200).json({status:200,message:data.rows[0].count})
    })
    .catch(err=>next(err))
}
module.exports = countVotesController;