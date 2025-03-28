const mongoose = require('mongoose');
const fs = require('fs');

const { collections } = require('./common');

const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
const dbLink = config.url;

mongoose.connect(dbLink);
const db = mongoose.connection;
async function clearDB() {
    for (const i of collections) {
        await db
            .dropCollection(i)
            .then(() => console.log(`Collection ${i} has been removed`));
    }
    db.close();
    console.log('Done');
}

clearDB();
