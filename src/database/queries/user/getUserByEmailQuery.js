const connection = require("../../config/connection")

const getUserByEmailQuery = (email) => {
    const sql = {
        TEXT : 'select from users where email=$1  RETURNING *',
        VALUES : [email],
    }
    return connection.query(sql)

}
module.exports = getUserByEmailQuery;