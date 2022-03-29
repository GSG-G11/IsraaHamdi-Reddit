const connection = require('../../config/connection');
const getCommnetsQuery = (postId) => {
    const sql = {
        text : `select name,description from users inner join comments
         on users.id = comments.user_id
        group by users.name, comments.description,comments.post_id
        having comments.post_id=$1`,
        values : [postId],
    }
    return connection.query(sql)
}
module.exports = getCommnetsQuery;
