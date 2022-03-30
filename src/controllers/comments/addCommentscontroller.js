const { addCommnetsQuery } = require('../../database/queries');
const { commentsSchema, castmaizeError } = require('../../utils');

const addCommentsController = (req,res,next) => { 
    console.log(req.body)
    const { description, user_id, post_id } = req.body;
    commentsSchema.validateAsync({description})
    .then(()=>addCommnetsQuery(description,user_id,post_id))
    .then (()=>res.status(201).json({status:201,message:'comments successfully added'}))
   .catch((error)=> {
      if(error.name === 'ValidationError') {
         next(castmaizeError(400,error.details))
      }else {
         next(error)
      }
   })
}
module.exports = addCommentsController ;