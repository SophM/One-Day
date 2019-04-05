// ---------------------------------------------------
// Dependencies
// ---------------------------------------------------

// load the Express node package
var express = require("express");

// load the "thing.js" to import the model (thing.js) to use the methods within it
var thing = require("../models/thing.js");


// ---------------------------------------------------
// Define the routes
// ---------------------------------------------------

// 
var router = express.Router();

// define the route to diplay the all the data from on the oneDay_db
router.get("/", function(req, res) {
    // call the selectAll method in the model
    thing.selectAll(function(data) {
        // create an object with the data we got back because handlebars needs an object
        var hbsObject = {
            bucketLists: data
        };
        res.render("index", hbsObject);
    });
});

// Export the router to make it available for other files (i. e., the server.js)
module.exports = router;
