const models = require('../models');
const wrapper = require('../utils/wrapper');

const mainURL = 'https://pokeapi.co/api/v2/';

const testModel = 'berry';

async function processData(data, col, model) {
    wrapper.processData[col](data);
    model.create(data);
}

async function inputAll() {
    console.log(testModel);
    const m = models[testModel];
    const url = `${mainURL}${testModel}`;
    const ULen = url.length + 1;
    const listOfItems = await fetch(`${url}?limit=10000`).then((res) =>
        res.json()
    );

    const promises = [];
    for (const item of listOfItems.results) {
        const tempURL = `${url}/${item.url.slice(ULen, -1)}/`;
        const data = await fetch(tempURL).then((res) => res.json());
        promises.push(processData(data, testModel, m));
    }
    const result = await Promise.all(promises);
    console.log(result);
    console.log(`${testModel} done`);
}

inputAll().then(() =>
    setTimeout(() => {
        models.db.close();
        console.log('All completed!');
    }, 1000)
);
