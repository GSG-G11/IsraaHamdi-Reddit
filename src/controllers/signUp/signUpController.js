const bcrypt = require('bcrypt');
const { signUpSchema, castmaizeError, jwtSign} = require('../../utils');
const { getUserByEmailQuery, addUserQuery } =require('../../database/queries');

const signUpController = (req, res, next) => {
   const { name, email, password } = req.body;
   signUpSchema.validateAsync(req.body,{ abortEarly: false })
  .then(()=>getUserByEmailQuery(email))
  .then(({ rowCount })=> {
      if(rowCount) {
         throw castmaizeError(400,'user is exists')
      } else {
         return bcrypt.hash(password, 10)
   }
  })
  .then((hashPassword)=>addUserQuery(name,hashPassword,email))
  .then((data)=>jwtSign({name,idUser:data.rows[0].id}))
  .then((token)=>res.cookie('token',token,{httpOnly: true, secure: true}).json({
         status: 200,
         message: 'Register successfully :)',
      }))
  .catch((error)=> {
     if(error.name === 'ValidationError') {
        const message= error.details.map((i) => i.message)
        next(castmaizeError(400,message))
     }else {
        next(error)
     }
  })
}
module.exports = signUpController;