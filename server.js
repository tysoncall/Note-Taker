// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require('fs');
var htmlRoutes = require("./routes/htmlRoutes")
var apiRoutes = require("./routes/apiRoutes")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 2006;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});