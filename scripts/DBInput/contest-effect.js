const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/contest-effect";
let ULen = mainURL.length+1;

const contestEffectSchema = mongoose.Schema(common.schemas.contest_effect_schema , {collection : "contesteffect"});

const ContestEffect = mongoose.model("ContestEffect", contestEffectSchema);

async function processData(data) {
    let langLen = "https://pokeapi.co/api/v2/language/".length;

    for (let i in data.effect_entries){
        data.effect_entries[i].language.id = Number(data.effect_entries[i].language.url.slice(langLen,-1));
        delete data.effect_entries[i].language.url;
    }
    for (let i in data.flavor_text_entries){
        data.flavor_text_entries[i].language.id = Number(data.flavor_text_entries[i].language.url.slice(langLen,-1));
        delete data.flavor_text_entries[i].language.url;
        if (data.flavor_text_entries[i].version) {delete data.flavor_text_entries[i].version;}
    }
    await ContestEffect.create(data).then(u => console.log(u));
}

//main code
async function startInput(){
    let index = `${mainURL}?limit=100000`;
    let listOfItems = await fetch(index).then((res)=> res.json());
    for (let i of listOfItems.results){
        let tempURL = `${mainURL}/${i.url.slice(ULen,-1)}/`;
        let data = await fetch(tempURL).then(res => res.json());
        processData(data);
    }
}

startInput().then(()=>setTimeout(()=>{mongoose.connection.close();console.log("Done");},1000));