const connection = require('../../config/connection');

const getPostForUserQuery = (id) => {
    const sql = {
        text : `select name,title,description,created_at,posts.id
         from users inner join posts on users.id = posts.user_id group by users.name,posts.title,posts.description,posts.created_at,posts.id having posts.user_id=$1 order by created_at DESC `,
        values : [id],
    }
    return connection.query(sql)

}
module.exports = getPostForUserQuery;