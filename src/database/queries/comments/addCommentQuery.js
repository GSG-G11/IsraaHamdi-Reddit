const connection = require('../../config/connection');
const addCommnetsQuery = (description,user_id,post_id) => {
    const sql = {
        text : `insert into comments (description,user_id,post_id) values ($1,$2,$3)`,
        values : [description,user_id,post_id],
    }
    return connection.query(sql)
}
module.exports = addCommnetsQuery;