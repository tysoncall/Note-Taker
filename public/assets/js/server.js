// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require('fs');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 2006;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Routes

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });


// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "notes.html"));
// });

//API Routes

// fs.readFile('db.json', 'utf8', function(err, data) {
//   console.log(data);
// })
// function handleRequest(req, res) {

//   // Here we use the fs package to read our db.json file
//   fs.readFile(__dirname + "db.json", function(err, data) {
//     if (err) throw err;
    
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

// how do I store and retrieve notes using fs??////////
// how do I use POST method properly??/////////


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});