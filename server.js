var express = require("express");
var cors = require("cors");

var app = express();

//  manifest needed appropriate CORS headers.
app.use(cors({ origin: '*' }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function(request, response) {
  response.sendFile(__dirname + "/public/index.html"); //Sends the index file to the router
});

// listens for requests
var listener = app.listen(process.env.PORT, function() {
  console.log("App is listening on port " + listener.address().port);
});
