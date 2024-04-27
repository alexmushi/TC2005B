const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shimano_prints',
    password: ''
});

module.exports = pool.promise();