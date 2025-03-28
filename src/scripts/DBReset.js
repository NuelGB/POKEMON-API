const models = require('../models');

const { db } = models;

async function clearDB() {
    const dropped = [];

    for (const i in models) {
        if (i !== 'db' && i !== 'template') {
            dropped.push(db.dropCollection(i));
            console.log(`${i} being dropped.`);
        }
    }

    await Promise.all(dropped);
    db.close();
    console.log('Done');
}

clearDB();
