const mongoose = require('mongoose');

const common = require('./common');
const wrapper = require('./wrapper');

common.mongooseInit();

const mainURL = 'https://pokeapi.co/api/v2/';

const collections = ['evolution-trigger'];

async function processData(data, col, model) {
    wrapper.processData[col](data);
    await model.create(data).then((u) => console.log(u));
}

async function inputAll() {
    for (const endpoint of collections) {
        const s = mongoose.Schema(common.schemas[endpoint], {
            collection: endpoint,
        });
        const m = mongoose.model(endpoint, s);
        const url = `${mainURL}${endpoint}`;
        const ULen = url.length + 1;
        const listOfItems = await fetch(`${url}?limit=10000`).then((res) =>
            res.json()
        );
        for (const item of listOfItems.results) {
            const tempURL = `${url}/${item.url.slice(ULen, -1)}/`;
            const data = await fetch(tempURL).then((res) => res.json());
            await processData(data, endpoint, m);
        }
    }
}

inputAll().then(() =>
    setTimeout(() => {
        mongoose.connection.close();
        console.log('Done');
    }, 1000)
);
