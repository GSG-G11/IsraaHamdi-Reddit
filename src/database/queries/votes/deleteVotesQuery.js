const connection = require('../../config/connection')

const deleteVotesQuery = (user_id,post_id) => {
    const sql = {
        text : 'delete from votes where user_id=$1 and post_id=$2',
        values : [user_id,post_id],
    }
    return connection.query(sql)

}
module.exports = deleteVotesQuery;