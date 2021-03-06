const mysql = require('mysql');

var connection;

// ESTABLISHING CONNECTION DETAILS
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        /*   host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'burgers_db' */
        host: 'remotemysql.com',
        user: 'KgdoZeBaIT',
        port: 3306,
        password: 'PO3l8vWIn6',
        database: 'KgdoZeBaIT'
    });
};

// MAKE CONNECTION
connection.connect((error) => {
    if (error) {
        console.error(`ERROR CONNECTING ${error.stack}`);
        return;
    }
    console.log(`CONNECTED AS ID ${connection.threadId}`);
});

// EXPORT CONNECTION FOR ORM TO USE
module.exports = connection;