var mysql = require('mysql');

// For jawsDB
var connection;
if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
     connection = mysql.createConnection(process.env.JAWSDB_URL);
    // connection = "mysql://ld4wb5vkp4ge7tsx:xbntjjts487q8ije@y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/fieyulerqm6a4zqb";
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'burger_db'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;