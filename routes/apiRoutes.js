const router = require("express").Router();

const fs = require("fs");
let db = require("../db/db.json");
const wFile = require("../db/writeDbFiles");
const rFile = require("../db/readDbFile");
console.log("db:", db);


router.get("/notes", function(req, res) {
  console.log("GET");
  rFile().then(function(newDB) {
    console.log("back from read:", JSON.parse(newDB));
    res.json(JSON.parse(newDB));
  });
});

router.post("/notes", function(req, res) {
  console.log("POST", req.body);
  var id = 1;
  if (db.length !== 0) {
    id = db[db.length - 1].id + 1;
  }
  var newNote = {
    id: id,
    title: req.body.title,
    text: req.body.text
  };
  db.push(newNote);
  //console.log(res)

  wFile(db).then(function(data) {
    //console.log(response)
    console.log("db after post:", data);

    res.json("save done");
  });

});

router.delete("/notes/:id", function(req, res) {
  console.log("delete this id:", req.params.id);
  

    console.log("DB:", db);
    var newDB = db.filter(note => note.id !== parseInt(req.params.id));
    console.log("newDB", newDB);
    db = newDB
    //
    wFile(db).then(function(data) {
      //console.log(response)
      console.log("db after post:", data);
      res.json("delete done");
    });
  //});
});

module.exports = router;
