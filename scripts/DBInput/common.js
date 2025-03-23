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

commonModels.NamedAPIResource = {
    name : String,
    id : Number
}
commonModels.names = [{
    name : String,
    language : commonModels.NamedAPIResource
}]



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
        language : commonModels.NamedAPIResource
    }],
    flavor_text_entries : [{
        flavor_text : String,
        language : commonModels.NamedAPIResource
    }]
}

schemas.item_attribute_schema = {
    id : Number,
    name : String,
    items : [commonModels.NamedAPIResource],
    names : commonModels.names,
    descriptions : [{
        description : String,
        language : commonModels.NamedAPIResource
    }]
}

schemas.item_fling_effect_schema = {
    id : Number,
    name : String,
    effect_entries : [{
        effect : String,
        language : commonModels.NamedAPIResource
    }],
    items : [commonModels.NamedAPIResource]
}

schemas.move_damage_class_schema = {
    id : Number,
    name : String,
    descriptions : [{
        description : String,
        language : commonModels.NamedAPIResource
    }],
    moves : [commonModels.NamedAPIResource],
    names : commonModels.names
}

exports.mongooseInit = mongooseInit;
exports.schemas = schemas;
exports.commonModels = commonModels;