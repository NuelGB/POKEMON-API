const mongoose = require('mongoose');
let fs = require('fs');

let config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
let dbLink = config.url;
mongoose.connect(
    dbLink
);
const db = mongoose.connection;

collections = ['language','encountermethod','contesteffect','itemattribute','itemflingeffect','movedamageclass',
    'growthrate','berry','contesttype'
];
async function clearDB(){
    for (let i of collections){
        await db.dropCollection(i).then(()=>console.log("Collection "+ i + " has been removed"));
    }
    db.close();
    console.log("Done");
}

clearDB();