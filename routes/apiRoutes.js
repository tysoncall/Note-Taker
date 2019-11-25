const router = require("express").Router()
//const myNotes = require("../db/mynotes")
const fs = require("fs")
const db = require("../db/db.json")
const wFile = require("../db/writeDbFiles")
const rFile = require("../db/readDbFile")
console.log("db:", db)
// "/api/"


router.get("/notes", function(req,res){
    console.log("GET")
    rFile().then(function(newDB){
     console.log("back from read:", JSON.parse(newDB))
        res.json(JSON.parse(newDB))

    })

})

router.post("/notes", function(req, res){
    console.log(req.body)
    db.push(req.body)
    
    wFile(db).then(function(data){
        //console.log(response)
        console.log("db after post:", data)
        res.json(data)
    })
    // fs.writeFile("../db/db.json", db, function(err){
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("updated")
    //     }
    // })

})




module.exports = router