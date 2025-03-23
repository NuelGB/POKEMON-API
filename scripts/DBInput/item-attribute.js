const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/item-attribute";
let ULen = mainURL.length+1;

const itemAttributeSchema = mongoose.Schema(common.schemas.item_attribute_schema , {collection : "itemattribute"});

const ItemAttribute = mongoose.model("ItemAttribute", itemAttributeSchema);

async function processData(data) {
    let itemLen = "https://pokeapi.co/api/v2/item/".length;
    let langLen = "https://pokeapi.co/api/v2/language/".length;

    for (let i in data.items){
        data.items[i].id = Number(data.items[i].url.slice(itemLen,-1));
        delete data.items[i].url;
    }
    for (let i in data.names) {
        data.names[i].language.id = Number(data.names[i].language.url.slice(langLen,-1));
        delete data.names[i].language.url;
    }
    for (let i in data.descriptions) {
        data.descriptions[i].language.id = Number(data.descriptions[i].language.url.slice(langLen,-1));
        delete data.descriptions[i].language.url;
    }
    await ItemAttribute.create(data).then(u => console.log(u));
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

startInput().then(()=>setTimeout(()=>{mongoose.connection.close();console.log("Done");},500));