const bcrypt = require('bcrypt');
const {  castmaizeError, jwtSign, signInSchema} = require('../../utils');
const { getUserByEmailQuery } =require('../../database/queries');

const signInController = (req, res, next) => {
   let id;
   let name;
   const { email, password } = req.body;
   signInSchema.validateAsync(req.body,{ abortEarly: false })
  .then(()=>getUserByEmailQuery(email))
  .then((data)=> {
      if(data.rowCount === 0) {
         throw castmaizeError(400,'this email is not exists')
      } else {
         id = data.rows[0].id
         name = data.rows[0].name
         return bcrypt.compare(password,data.rows[0].password)
   }
  })
  .then((result)=> {
     if (result) {
       return jwtSign({name,idUser:id})
     }else {
      throw castmaizeError(400,'Invalid Password')
     }
  })
  .then((token)=>res.cookie('token',token,{httpOnly: true, secure: true}).json({
         status: 200,
         message: 'Sign In successfully :)',
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
module.exports = signInController;