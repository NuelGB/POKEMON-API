const models = require('../models');
const wrapper = require('../utils/wrapper');

const mainURL = 'https://pokeapi.co/api/v2/';

const testModel = 'pokemon-form';

async function processData(data, model) {
    wrapper(data);
    return model.create(data);
}

async function inputAll() {
    console.log(testModel);
    const m = models[testModel];
    const url = `${mainURL}${testModel}`;
    const ULen = url.length + 1;
    const listOfItems = await fetch(`${url}?limit=10000`).then((res) =>
        res.json()
    );

    console.log('Data fetched');
    let i = 1;
    for (const item of listOfItems.results) {
        const tempURL = `${url}/${item.url.slice(ULen, -1)}/`;
        try {
            const data = await fetch(tempURL).then((res) => res.json());
            processData(data, m).then(() => console.log(i++));
        } catch (err) {
            console.log(err);
            console.log(`Error happened at id ${i++}`);
            models.db.close();
            return;
        }
    }
    console.log(`${testModel} done`);
}

inputAll().then(() =>
    setTimeout(() => {
        models.db.close();
        console.log('All completed!');
    }, 1000)
);
