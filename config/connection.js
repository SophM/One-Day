// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the mysql node package
var mysql = require("mysql");


// ---------------------------------------------------
// Set up the connection to mySQL and export
// --------------------------------------------------- 

// to deploy to Heroku - add something here!!
// configure the connection with my credentials
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "a9uLc2frfg7buEidFA",
    database: "oneDay_db"
}); 
 
// open the connection with oneDay_db
connection.connect(function(err) {
    if (err) {
        console.log("error at connection: " + err.stack);
    }

    console.log("connected as id: " + connection.threadId);
});

// export the connection to make it available for other files
module.exports = connection;