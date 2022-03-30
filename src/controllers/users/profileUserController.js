const { getPostForUserQuery } = require('../../database/queries');

const profileUserController = (req,res,next) => {
 const {user_id} = req.body;
 getPostForUserQuery(user_id)
 .then((data)=> {
     if (data.rowCount) {
        res.status(200).json(data.rows)
     }else {
         res.status(200).json({status:200,message:'there is no posts'})
     }
 })
 .catch((err)=>next(err));
}

module.exports = profileUserController ;