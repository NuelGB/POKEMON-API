const mongoose = require('mongoose');
const fs = require('fs');

function mongooseInit(){
    const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
    const dbLink = config.url;
    mongoose.connect(
        dbLink
    );
}

const collections = [
    'language','encounter-method','contest-effect',
    'item-attribute','item-fling-effect','move-damage-class',
    'growth-rate','berry','contest-type',
    'evolution-chain','evolution-trigger'
];

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

schemas["encounter-method"] = {
    id : Number,
    name : String,
    order : Number,
    names : commonModels.names
} ;

schemas["language"] = {
    id : Number ,
    name : String,
    official : Boolean,
    iso639 : String,
    iso3166 : String,
    names : commonModels.names
} 

schemas["contest-effect"] = {
    id : Number,
    appeal : Number,
    jam : Number,
    effect_entries : [{
        effect : String,
        language : commonModels.NamedAPIResource
    }],
    flavor_text_entries : [{
        flavor_text : String,
        language : commonModels.NamedAPIResource,
        version : commonModels.NamedAPIResource
    }]
}

schemas["item-attribute"] = {
    id : Number,
    name : String,
    items : [commonModels.NamedAPIResource],
    names : commonModels.names,
    descriptions : commonModels.descriptions
}

schemas["item-fling-effect"] = {
    id : Number,
    name : String,
    effect_entries : [{
        effect : String,
        language : commonModels.NamedAPIResource
    }],
    items : [commonModels.NamedAPIResource]
}

schemas["move-damage-class"] = {
    id : Number,
    name : String,
    descriptions : commonModels.descriptions,
    moves : [commonModels.NamedAPIResource],
    names : commonModels.names
}

schemas["growth-rate"] = {
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

schemas["contest-type"] = {
    id : Number,
    name : String,
    berry_flavor : commonModels.NamedAPIResource,
    names : [{
        name : String,
        color : String,
        language : commonModels.NamedAPIResource
    }]
}

schemas["berry"] = {
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

//TODO : FIX THIS!
//To implement /evolution-chain, we need an object that supports infinite recurision
//Neither MongoDB nor JavaScript supports infinite levels of recursion
//Since checking recursions would take an unoptimized amount of time,
//We will assume a max level of recursion for simplicity
//Based on a google search, the longest Evo-chain is 3 deep.
//Without doing any research on the original API, assume 4 recursions is enough.
recursing_chain = {
    id_baby : Boolean,
    species : commonModels.NamedAPIResource,
    evolution_details : [{
        item : commonModels.NamedAPIResource,
        trigger : commonModels.NamedAPIResource,
        gender : Number,
        held_item : commonModels.NamedAPIResource,
        known_move : commonModels.NamedAPIResource,
        known_move_type : commonModels.NamedAPIResource,
        location : commonModels.NamedAPIResource,
        min_level : Number,
        min_happiness : Number,
        min_beauty : Number,
        min_affection : Number,
        needs_overworld_rain : Boolean,
        party_species : commonModels.NamedAPIResource,
        party_type : commonModels.NamedAPIResource,
        relative_physical_stats : Number,
        time_of_day : String,
        trade_species : commonModels.NamedAPIResource,
        turn_upside_down : Boolean
    }],
    evolves_to : [
        {
            id_baby : Boolean,
            species : commonModels.NamedAPIResource,
            evolution_details : [{
                item : commonModels.NamedAPIResource,
                trigger : commonModels.NamedAPIResource,
                gender : Number,
                held_item : commonModels.NamedAPIResource,
                known_move : commonModels.NamedAPIResource,
                known_move_type : commonModels.NamedAPIResource,
                location : commonModels.NamedAPIResource,
                min_level : Number,
                min_happiness : Number,
                min_beauty : Number,
                min_affection : Number,
                needs_overworld_rain : Boolean,
                party_species : commonModels.NamedAPIResource,
                party_type : commonModels.NamedAPIResource,
                relative_physical_stats : Number,
                time_of_day : String,
                trade_species : commonModels.NamedAPIResource,
                turn_upside_down : Boolean
            }],
            evolves_to : [
                {
                    id_baby : Boolean,
                    species : commonModels.NamedAPIResource,
                    evolution_details : [{
                        item : commonModels.NamedAPIResource,
                        trigger : commonModels.NamedAPIResource,
                        gender : Number,
                        held_item : commonModels.NamedAPIResource,
                        known_move : commonModels.NamedAPIResource,
                        known_move_type : commonModels.NamedAPIResource,
                        location : commonModels.NamedAPIResource,
                        min_level : Number,
                        min_happiness : Number,
                        min_beauty : Number,
                        min_affection : Number,
                        needs_overworld_rain : Boolean,
                        party_species : commonModels.NamedAPIResource,
                        party_type : commonModels.NamedAPIResource,
                        relative_physical_stats : Number,
                        time_of_day : String,
                        trade_species : commonModels.NamedAPIResource,
                        turn_upside_down : Boolean
                    }],
                    evolves_to : [ {
                        id_baby : Boolean,
                        species : commonModels.NamedAPIResource,
                        evolution_details : [{
                            item : commonModels.NamedAPIResource,
                            trigger : commonModels.NamedAPIResource,
                            gender : Number,
                            held_item : commonModels.NamedAPIResource,
                            known_move : commonModels.NamedAPIResource,
                            known_move_type : commonModels.NamedAPIResource,
                            location : commonModels.NamedAPIResource,
                            min_level : Number,
                            min_happiness : Number,
                            min_beauty : Number,
                            min_affection : Number,
                            needs_overworld_rain : Boolean,
                            party_species : commonModels.NamedAPIResource,
                            party_type : commonModels.NamedAPIResource,
                            relative_physical_stats : Number,
                            time_of_day : String,
                            trade_species : commonModels.NamedAPIResource,
                            turn_upside_down : Boolean
                        }],
                        evolves_to : Number
                    }]
                }
            ]
        }
    ]
}

/*
    TODO : fix evolution-chain by making a sepparate object for chains
    Store chain objects in the database. Store a sepparate full evoluiton-chain object
    the full object stores references to the singular chain objects
    When the endpoint is called, recursively search for the reference in the chain database and insert it into
    the final JSON object. 
*/

schemas["evolution-chain"] = {
    id : Number,
    baby_trigger_item : commonModels.NamedAPIResource,
    chain : recursing_chain
};

schemas["evolution-trigger"] = {
    id : Number,
    name : String,
    names : commonModels.names,
    pokemon_species : [commonModels.NamedAPIResource]
}

exports.mongooseInit = mongooseInit;
exports.schemas = schemas;
exports.commonModels = commonModels;
exports.collections = collections;