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

let mainURL = "https://pokeapi.co/api/v2/language";
let ULen = mainURL.length+1;

const langSchema = mongoose.Schema({
    id : Number ,
    name : String,
    official : Boolean,
    iso639 : String,
    iso3166 : String,
    names : [{
        name : String,
        language : {
            name : String,
            id : Number
        }
    }]
} , {collection : "language"});

const Language = mongoose.model("Language", langSchema);


function loopOverList(data) {
    for (let i of data.results) {
        let tempURL = mainURL + "/" + i.url.slice(ULen , -1) + "/";
        inputData(tempURL);
    }
}

function inputData(u) {
    https.get(u , getData).on('error',(err) =>{
        console.log(err);
    })
}

async function processData(data) {
    for (let i in data.names){
        data.names[i].language.id = data.names[i].language.url.slice(ULen,-1);
        delete data.names[i].language.url;
    }
    Language.create(data).then(u => console.log(u));
}

//main code
let index = mainURL + "?limit=100000";

https.get(index , (res) =>{
    if (res.statusCode == 200) {
    let data = '';
    let header = '';

    res.on('header', (h) => header += h);
    res.on('data' , (d) => data += d);

    res.on('end' , () => {
        let final = JSON.parse(data);
        loopOverList(final);
        });
    }

}).on('error',(err) =>{
    console.log(err);
})