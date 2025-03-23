const mongoose = require('mongoose');
const fs = require('fs');

function mongooseInit(){
    const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
    const dbLink = config.url;
    mongoose.connect(
        dbLink
    );
}

let schemas = {}

schemas.encounter_method_schema = {
    id : Number,
    name : String,
    order : Number,
    names : [{
        name : String,
        language : {
            name : String,
            id : Number
        }
    }]
} ;

schemas.language_schema = {
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
} 

exports.mongooseInit = mongooseInit;
exports.schemas = schemas;