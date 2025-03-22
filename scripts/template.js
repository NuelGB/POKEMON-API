const mongoose = require('mongoose');
const https = require('https');
let fs = require('fs');

let config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
let dbLink = config.url;
mongoose.connect(
    dbLink
);
const db = mongoose.connection;

function getData(res) {
    if (res.statusCode == 200) {
        let data = '';
        let header = '';

        res.on('header', (h) => header += h);
        res.on('data' , (d) => data += d);

        res.on('end' , () => {
            let final = JSON.parse(data);
            processData(final);
        });
    }
}

//Real code starts here
//Change schema,model, url, and processData()

let url = "https://pokeapi.co/api/v2/pokemon?limit=151";

const pokeSchema = mongoose.Schema({
    name : String,
    pokeid : Number,
} , {collection : "pokemon"});

const Pokemon = mongoose.model("Pokemon", pokeSchema);

function inputData() {
    https.get(url , getData).on('error',(err) =>{
        console.log(err);
    })
}

async function processData(data) {
    await db.dropCollection('pokemons').then((res) => console.log(res)).catch((err) => console.log("Collection already doesn't exist"));
    for (var i of data.results) {
        
        await Pokemon.create({
            name : i.name,
            pokeid : i.url.slice(34,-1)
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    }
}

inputData();