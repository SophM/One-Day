// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the "orm.js" file to import the ORM to use the methods within it
var orm = require("../config/orm.js");


// ---------------------------------------------------
// Model
// --------------------------------------------------- 

// create the methods that will call on the ORM methods
var thing = {
    selectAll: function(cb) {
        // call the "selectAll" method from the ORM
        orm.selectAll("bucketLists", function(results) {
            // send the results as an argument in calback function
            cb(results);
        });
    },
    insertOne: function(ColName, Val, cb) {
        // call the "insertOne" method from the ORM
        orm.insertOne("bucketLists", ColName, Val, function(results) {
            // send the results as an argument in calback function
            cb(results);
        })
    },
    updateOne: function(ColNewVal, ColName, ColVal, cb) {
        // call the "updateOne" method from the ORM
        orm.updateOne("bucketLists", ColNewVal, ColName, ColVal, function(results) {
            // send the results as an argument in calback function
            cb(results);
        })
    }
}

// Export the methods for the controller "oneday_Controller.js"
module.exports = thing;