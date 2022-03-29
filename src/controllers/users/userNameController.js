const { getUserNameQuery } = require("../../database/queries");

const userNameController = (req,res,next) => {
 const {user_id} = req.body;
 getUserNameQuery(user_id)
 .then((data)=>res.status(200).json(data.rows))
 .catch((err)=>next(err))
}

module.exports = userNameController ;
