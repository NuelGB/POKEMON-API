const mongoose = require('mongoose');
const fs = require('fs');

function mongooseInit(){
    const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
    const dbLink = config.url;
    mongoose.connect(
        dbLink
    );
}

let commonModels = {};

commonModels.language = {
    name : String,
    id : Number
}

commonModels.names = [{
    name : String,
    language : commonModels.language
}]

commonModels.NamedAPIResource = {
    name : String,
    id : Number
}

let schemas = {}

schemas.encounter_method_schema = {
    id : Number,
    name : String,
    order : Number,
    names : commonModels.names
} ;

schemas.language_schema = {
    id : Number ,
    name : String,
    official : Boolean,
    iso639 : String,
    iso3166 : String,
    names : commonModels.names
} 

schemas.contest_effect_schema = {
    id : Number,
    appeal : Number,
    jam : Number,
    effect_entries : [{
        effect : String,
        language : commonModels.language
    }],
    flavor_text_entries : [{
        flavor_text : String,
        language : commonModels.language
    }]
}

exports.mongooseInit = mongooseInit;
exports.schemas = schemas;
exports.commonModels = commonModels;