const fs = require("fs");
const path = require("path");
const filename = "./db.json";
const util = require("util")

const readFileUtil = util.promisify(fs.readFile)
const rFile = () => { 
    return (readFileUtil("db/db.json", "utf8"))
  
}

module.exports = rFile;