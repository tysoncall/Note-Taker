const fs = require("fs");
const path = require("path");
const filename = "./db.json";
const util = require("util")

const writeFileUtil = util.promisify(fs.writeFile)
const wFile = (db) => { 
    return (writeFileUtil("db/db.json", JSON.stringify(db)))
  
}

module.exports = wFile;