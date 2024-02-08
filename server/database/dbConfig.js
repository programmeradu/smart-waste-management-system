//Libraries
require('dotenv/config');
const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'sta.mysql.database.azure.com',
    user: 'algorithmx',
    password: process.env.MYSQL_PASSWORD,
    database: "swms",
    multipleStatements: true
});
module.exports = database;
