require('dotenv').config();
const { sign } = require('jsonwebtoken');
const jwtSign = (payload) => {
    return new Promise((resolve, reject) => {
        sign(payload, process.env.JWT_SECRET, function(err, token) {
            if(err) {
                reject(err)
            } else {
                resolve(token)
            }
          })
    })
};

module.exports = jwtSign;