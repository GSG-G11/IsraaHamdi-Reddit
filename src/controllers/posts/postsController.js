const { getPostsQuery } = require('../../database/queries');
const postsController = (req,res,next) => {
    getPostsQuery()
    .then((data)=>res.status(200).json(data.rows))
    .catch((error)=>next(error));

}
module.exports = postsController;
