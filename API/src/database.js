const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10507123',
    password: 'isesgXgC5I',
    database: 'sql10507123'
})

dbConnection.connect(function(err){
    if (err){
        console.error('Error: ' + err.stack);
        return;
    }

    console.log(`connected as ID: ${dbConnection.threadId}`)
})


module.exports = dbConnection;