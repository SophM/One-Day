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
        orm.selectAll("bucketLists", function(res) {
            cb(res);
        });
    },
    selectOne: function(ColName, ColVal, cb) {
        orm.selectOne("bucketLists", ColName, ColVal, function(res) {
            cb(res);
        })
    },
    updateOne: function(ColNewVal, ColName, ColVal, cb) {
        orm.updateOne("bucketLists", ColNewVal, ColName, ColVal, function(res) {
            cb(res);
        })
    }
}

// Export the database functions for the controller "oneday_Controller.js"
module.exports = thing;