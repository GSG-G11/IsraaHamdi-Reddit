const { jwtVerify } = require('../utils');

const verifyUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(302).redirect('/signIn');

    return jwtVerify(token)
      .then((data) => {
        req.body.user_id = data.idUser;
        next();
      })
      .catch((error) => next(error));

}
module.exports = verifyUser;
