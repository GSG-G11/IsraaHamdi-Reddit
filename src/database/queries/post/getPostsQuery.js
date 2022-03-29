const connection = require('../../config/connection');

const getPostsQuery = () => {
    const sql = {
        text : `select name,title,description,created_at,posts.id
         from users inner join posts on users.id = posts.user_id order by created_at DESC`,
        values : [],
    }
    return connection.query(sql)

}
module.exports = getPostsQuery;