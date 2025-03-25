const mongoose = require('mongoose');
let fs = require('fs');

const {collections} = require('./common')
let config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
let dbLink = config.url;


mongoose.connect(
    dbLink
);
const db = mongoose.connection;
async function clearDB(){
    for (let i of collections){
        await db.dropCollection(i).then(()=>console.log("Collection "+ i + " has been removed"));
    }
    db.close();
    console.log("Done");
}

clearDB();