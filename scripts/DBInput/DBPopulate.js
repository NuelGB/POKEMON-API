const mongoose = require('mongoose');

let common = require('./common');
let wrapper = require('./wrapper');

common.mongooseInit();

let mainURL = "https://pokeapi.co/api/v2/";

collections = ['berry','contest-effect'];

async function processData(data,col,model){
    wrapper.processData[col](data);
    await model.create(data).then(u=>console.log(u));
}

async function inputAll() {
    for (let endpoint of collections){
        const s = mongoose.Schema(common.schemas[endpoint], {collection : endpoint});
        const m = mongoose.model(endpoint , s);
        let url = `${mainURL}${endpoint}`;
        let ULen = url.length+1;
        let listOfItems = await fetch(`${url}?limit=10000`).then((res)=> res.json());
        for (let item of listOfItems.results){
            let tempURL = `${url}/${item.url.slice(ULen,-1)}/`;
            let data = await fetch(tempURL).then(res => res.json());
            await processData(data,endpoint,m);
        }
    }
}

inputAll().then(()=>setTimeout(()=>{mongoose.connection.close();console.log("Done");},1000));