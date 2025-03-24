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
commonModels.descriptions = [{
    description : String,
    language : commonModels.NamedAPIResource
}]



let schemas = {}

schemas.encountermethod = {
    id : Number,
    name : String,
    order : Number,
    names : commonModels.names
} ;

schemas.language = {
    id : Number ,
    name : String,
    official : Boolean,
    iso639 : String,
    iso3166 : String,
    names : commonModels.names
} 

schemas.contesteffect = {
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

schemas.itemattribute = {
    id : Number,
    name : String,
    items : [commonModels.NamedAPIResource],
    names : commonModels.names,
    descriptions : commonModels.descriptions
}

schemas.itemflingeffect = {
    id : Number,
    name : String,
    effect_entries : [{
        effect : String,
        language : commonModels.NamedAPIResource
    }],
    items : [commonModels.NamedAPIResource]
}

schemas.movedamageclass = {
    id : Number,
    name : String,
    descriptions : commonModels.descriptions,
    moves : [commonModels.NamedAPIResource],
    names : commonModels.names
}

schemas.growthrate = {
    id : Number,
    name : String,
    formula : String,
    descriptions : commonModels.descriptions,
    levels : [{
        level : Number,
        experience : Number
    }],
    pokemon_species : [commonModels.NamedAPIResource]
}

schemas.contesttype = {
    id : Number,
    name : String,
    berry_flavor : commonModels.NamedAPIResource,
    names : [{
        name : String,
        color : String,
        language : commonModels.NamedAPIResource
    }]
}

schemas.berry = {
    id : Number,
    name : String,
    growth_time : Number,
    max_harvest : Number,
    natural_gift_power : Number,
    size : Number,
    smoothness : Number,
    soil_dryness : Number,
    firmness : commonModels.NamedAPIResource,
    flavors : [{
        potency : Number ,
        flavor : commonModels.NamedAPIResource
    }],
    item : commonModels.NamedAPIResource,
    natural_gift_type : commonModels.NamedAPIResource
}

exports.mongooseInit = mongooseInit;
exports.schemas = schemas;
exports.commonModels = commonModels;