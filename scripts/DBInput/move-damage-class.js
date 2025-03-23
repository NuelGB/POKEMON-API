const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/move-damage-class";
let ULen = mainURL.length+1;

const moveDamageClass = mongoose.Schema(common.schemas.move_damage_class_schema , {collection : "movedamageclass"});

const MoveDamageClass = mongoose.model("MoveDamageClass", moveDamageClass);

async function processData(data) {
    let langLen = "https://pokeapi.co/api/v2/language/".length;
    let moveLen = "https://pokeapi.co/api/v2/move/".length;

    for (let i in data.names){
        data.names[i].language.id = Number(data.names[i].language.url.slice(langLen,-1));
        delete data.names[i].language.url;
    }
    for (let i in data.moves) {
        data.moves[i].id = Number(data.moves[i].url.slice(moveLen,-1));
        delete data.moves[i].url;
    }
    for (let i in data.descriptions) {
        data.descriptions[i].language.id = Number(data.descriptions[i].language.url.slice(langLen,-1));
        delete data.descriptions[i].language.url;
    }
    await MoveDamageClass.create(data).then(u => console.log(u));
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