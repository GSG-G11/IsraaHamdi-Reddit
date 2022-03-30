const connection = require('../../config/connection')

const addUserQuery = (name,email,password) => {
    const sql = {
        text : 'INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING id',
        values : [name,email, password],
    }
    return connection.query(sql)

}
module.exports = addUserQuery;