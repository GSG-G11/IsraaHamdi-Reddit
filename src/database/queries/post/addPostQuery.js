const connection = require('../../config/connection')

const addPostQuery = (title,description,user_id) => {
    const sql = {
        text : 'INSERT INTO posts (title,description,user_id) VALUES ($1,$2,$3) Returning *',
        values : [title,description,user_id],
    }
    return connection.query(sql)

}
module.exports = addPostQuery;