const path = require('path');
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');


const adapter = new FileSync(path.join(__dirname, "db.json"));

var db = null; 

function getConnection() {
    if (db == null) {
        db = low(adapter);

        db.defaults({ revenues: [], expenses: [] }).write();
        console.log("Criada conexao com o banco")
    }

    return db;
}


module.exports = getConnection();
