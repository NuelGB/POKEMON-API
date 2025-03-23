const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/growth-rate";
let ULen = mainURL.length+1;

const growthRateSchema = mongoose.Schema(common.schemas.growth_rate_schema , {collection : "growthrate"});

const GrowthRate = mongoose.model("GrowthRate", growthRateSchema);

async function processData(data) {
    let langLen = "https://pokeapi.co/api/v2/language/".length;
    let specLen = "https://pokeapi.co/api/v2/pokemon-species/".length

    for (let i in data.descriptions) {
        data.descriptions[i].language.id = Number(data.descriptions[i].language.url.slice(langLen,-1));
        delete data.descriptions[i].language.url;
    }
    for (let i in data.pokemon_species){
        data.pokemon_species[i].id = Number(data.pokemon_species[i].url.slice(specLen,-1));
        delete data.pokemon_species[i].url;
    }
    await GrowthRate.create(data).then(u => console.log(u));
}

//main code
async function startInput(){
    let index = `${mainURL}?limit=100000`;
    let listOfItems = await fetch(index).then((res)=> res.json());
    for (let i of listOfItems.results){
        let tempURL = `${mainURL}/${i.url.slice(ULen,-1)}/`;
        let data = await fetch(tempURL).then(res => res.json());
        await processData(data);
    }
}

startInput().then(()=>setTimeout(()=>{mongoose.connection.close();console.log("Done");},1000));