const mongoose = require('mongoose');

let common = require('./common');

common.mongooseInit();

//Real code starts here
//Change schema,model, url, and processData()

let mainURL = "https://pokeapi.co/api/v2/berry";
let ULen = mainURL.length+1;

const berry = mongoose.Schema(common.schemas.berry_schema , {collection : "berry"});

const Berry = mongoose.model("Berry", berry);

async function processData(data) {
    let firmLen = "https://pokeapi.co/api/v2/berry-firmness/".length;
    let flavLen = "https://pokeapi.co/api/v2/berry-flavor/".length;
    let itemLen = "https://pokeapi.co/api/v2/item/".length;
    let ngtLen = "https://pokeapi.co/api/v2/type/".length;
    
    data.firmness.id = Number(data.firmness.url.slice(firmLen,-1));
    delete data.firmness.url;
    data.item.id = Number(data.item.url.slice(itemLen,-1));
    delete data.item.url;
    data.natural_gift_type.id = Number(data.natural_gift_type.url.slice(ngtLen,-1));
    delete data.natural_gift_type.url;
    
    for (let i in data.flavors) {
        data.flavors[i].flavor.id = Number(data.flavors[i].flavor.url.slice(flavLen,-1));
        delete data.flavors[i].flavor.url;
    }
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