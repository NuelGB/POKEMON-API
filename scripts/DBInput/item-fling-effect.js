const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/item-fling-effect";
let ULen = mainURL.length+1;

const itemFlingEffectSchema = mongoose.Schema(common.schemas.item_fling_effect_schema , {collection : "itemflingeffect"});

const ItemFlingEffect = mongoose.model("ItemFlingEffect", itemFlingEffectSchema);

async function processData(data) {
    let langLen = "https://pokeapi.co/api/v2/language/".length;
    let itemLen = "https://pokeapi.co/api/v2/item/".length;

    for (let i in data.effect_entries){
        data.effect_entries[i].language.id = Number(data.effect_entries[i].language.url.slice(langLen,-1));
        delete data.effect_entries[i].language.url;
    }
    for (let i in data.items){
        data.items[i].id = Number(data.items[i].url.slice(itemLen,-1));
        delete data.items[i].url;
    }
    await ItemFlingEffect.create(data).then(u => console.log(u));
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