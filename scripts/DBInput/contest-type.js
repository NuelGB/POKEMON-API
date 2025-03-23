const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/contest-type";
let ULen = mainURL.length+1;

const contestTypeSchema = mongoose.Schema(common.schemas.contest_type_schema , {collection : "contesttype"});

const ContestType = mongoose.model("ContestType", contestTypeSchema);

async function processData(data) {
    let langLen = "https://pokeapi.co/api/v2/language/".length;
    let flavLen = "https://pokeapi.co/api/v2/berry-flavor/".length;

    for (let i in data.names){
        data.names[i].language.id = Number(data.names[i].language.url.slice(langLen,-1));
        delete data.names[i].language.url;
    }
    data.berry_flavor.id = data.berry_flavor.url.slice(flavLen,-1);
    await ContestType.create(data).then(u => console.log(u));
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