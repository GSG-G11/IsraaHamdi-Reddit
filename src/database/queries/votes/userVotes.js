const connection = require('../../config/connection')

const userVotes = (user_id,post_id) => {
    const sql = {
        text : 'select * from votes where user_id=$1 and post_id=$2',
        values : [user_id,post_id],
    }
    return connection.query(sql)

}
module.exports = userVotes;