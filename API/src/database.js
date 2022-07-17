const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'regina'
})

dbConnection.connect(function(err){
    if (err){
        console.error('Error: ' + err.stack);
        return;
    }

    console.log(`connected as ID: ${dbConnection.threadId}`)
})


module.exports = dbConnection;