const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/encounter-method";
let ULen = mainURL.length+1;

const encounterMethodSchema = mongoose.Schema(common.schemas.encounter_method_schema , {collection : "encountermethod"});

const EncounterMethod = mongoose.model("EncounterMethod", encounterMethodSchema);

async function processData(data) {
    for (let i in data.names){
        data.names[i].language.id = data.names[i].language.url.slice(ULen,-1);
        delete data.names[i].language.url;
    }
    EncounterMethod.create(data).then(u => console.log(u));
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