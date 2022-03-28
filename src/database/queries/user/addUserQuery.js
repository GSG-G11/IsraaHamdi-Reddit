const connection = require("../../config/connection")

const addUserQuery = (name,email,password) => {
    const sql = {
        TEXT : 'INSERT INTO users (name,email,password) VALUES ($1,$2,$3)',
        VALUES : [name,email, password],
    }
    return connection.query(sql)

}
module.exports = addUserQuery;