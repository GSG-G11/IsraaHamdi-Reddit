const connection = require('../../config/connection');

const getUserNameQuery = (id) => {
    const sql = {
        text : 'select name from users where id=$1 ',
        values : [id],
    }
    return connection.query(sql)

}
module.exports = getUserNameQuery;