const connection = require('../../config/connection')

const addVotesQuery = (user_id,post_id) => {
    const sql = {
        text : 'INSERT INTO votes (user_id,post_id) VALUES ($1,$2) Returning *',
        values : [user_id,post_id],
    }
    return connection.query(sql)

}
module.exports = addVotesQuery;