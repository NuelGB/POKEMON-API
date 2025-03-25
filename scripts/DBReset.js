const mongoose = require('mongoose');
let fs = require('fs');

let config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
let dbLink = config.url;


mongoose.connect(
    dbLink
);
const db = mongoose.connection;

collections = [
    'language','encounter-method','contest-effect',
    'item-attribute','item-fling-effect','move-damage-class',
    'growth-rate','berry','contest-type',
    'evolution-chain','evolution-trigger'
];
async function clearDB(){
    for (let i of collections){
        await db.dropCollection(i).then(()=>console.log("Collection "+ i + " has been removed"));
    }
    db.close();
    console.log("Done");
}

clearDB();