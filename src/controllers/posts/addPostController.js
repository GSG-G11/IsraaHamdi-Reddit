
const { postSchema, castmaizeError} = require('../../utils');
const { addPostQuery } =require('../../database/queries');
const addPostController = (req,res,next) => {
    const { title, description,user_id } = req.body;
    postSchema.validateAsync({title, description},{ abortEarly: false })
    .then(()=>addPostQuery(title,description,user_id))
    .then (()=>res.status(201).json({status:201,message:'Post successfully added'}))
   .catch((error)=> {
      if(error.name === 'ValidationError') {
         const message= error.details.map((i) => i.message)
         next(castmaizeError(400,message))
      }else {
         next(error)
      }
   })

}
module.exports = addPostController;