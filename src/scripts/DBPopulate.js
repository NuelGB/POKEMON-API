const models = require('../models');
const wrapper = require('../utils/wrapper');

const mainURL = 'https://pokeapi.co/api/v2/';

async function processData(data, model) {
    wrapper(data);
    return model.create(data);
}

async function inputAll() {
    const p = [];
    for (const modelName in models) {
        if (modelName === 'db' || modelName === 'template') continue;
        console.log(modelName);
        const m = models[modelName];
        const url = `${mainURL}${modelName}`;
        const ULen = url.length + 1;
        const listOfItems = await fetch(`${url}?limit=10000`).then((res) =>
            res.json()
        );

        let i = 1;
        for (const item of listOfItems.results) {
            const tempURL = `${url}/${item.url.slice(ULen, -1)}/`;
            const data = await fetch(tempURL).then((res) => res.json());
            processData(data, m).then(() => console.log(i++));
        }
        console.log(`${modelName} Added`);
    }
}

inputAll().then(() =>
    setTimeout(() => {
        models.db.close();
        console.log('All completed!');
    }, 1000)
);
