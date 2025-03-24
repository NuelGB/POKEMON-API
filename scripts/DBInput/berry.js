const mongoose = require('mongoose');

let common = require('./common');
let wrapper = require('./wrapper');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/berry";
let ULen = mainURL.length+1;

const berry = mongoose.Schema(common.schemas.berry_schema , {collection : "berry"});

const Berry = mongoose.model("Berry", berry);

async function processData(data) {
    wrapper.processData['berry'](data);
    await Berry.create(data).then(u => console.log(u));
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