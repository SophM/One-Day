// make sure the document is loaded before doing anything else
$(document).ready(function() {

    // event listener on the "add it!" button
    $("#add-btn").on("submit", function(event) {
        // prevent the page for refreshing itself
        event.preventDefault();

        // grab the user input
        var newThing = {
            thing: $("#thing").val().trim()
        }

        // send the post request to the server 
        $.post("/api/things", newThing, function() {
            // confirmation message
            console.log("created new thing");
            // reload the page when the data come back
            // to get the updated list
            location.reload();
        });
    });

});