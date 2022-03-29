require('dotenv').config();
const { verify} = require('jsonwebtoken');
const jwtVerify = (token) => {
    return new Promise((resolve, reject) => {
        verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if(err) {
                reject(err)
            } else {
                resolve(decoded)
            }
          })
    })
};

module.exports = jwtVerify;