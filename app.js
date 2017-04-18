// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var path       = require('path');
var port       = process.env.PORT || 3000;  // configure port that will be listen by the server


// ROUTES FOR OUR API
// ======================================

// set static file location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// MAIN CATCHALL ROUTE ----------------------
// SEND USERS TO FRONTEND -------------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// START THE SERVER
// =============================================================================
app.listen(port, function(){
    console.log('Magic happens on port ' + port);
});
