const CONSTANTS = {
    firmLen: 'https://pokeapi.co/api/v2/berry-firmness/'.length,
    flavLen: 'https://pokeapi.co/api/v2/berry-flavor/'.length,
    itemLen: 'https://pokeapi.co/api/v2/item/'.length,
    ifeLen: 'https://pokeapi.co/api/v2/item-fling-effect/'.length,
    catLen: 'https://pokeapi.co/api/v2/item-category/'.length,
    attLen: 'https://pokeapi.co/api/v2/item-attribute/'.length,
    pocketLen: 'https://pokeapi.co/api/v2/item-pocket/'.length,
    ngtLen: 'https://pokeapi.co/api/v2/type/'.length,
    langLen: 'https://pokeapi.co/api/v2/language/'.length,
    verLen: 'https://pokeapi.co/api/v2/version/'.length,
    vgLen: 'https://pokeapi.co/api/v2/version-group/'.length,
    moveLen: 'https://pokeapi.co/api/v2/move/'.length,
    pokeLen: 'https://pokeapi.co/api/v2/pokemon/'.length,
    specLen: 'https://pokeapi.co/api/v2/pokemon-species/'.length,
    triggerLen: 'https://pokeapi.co/api/v2/evolution-trigger/'.length,
    chainLen: 'https://pokeapi.co/api/v2/evolution-chain/'.length,
    emLen: 'https://pokeapi.co/api/v2/encounter-method/'.length,
    typeLen: 'https://pokeapi.co/api/v2/type/'.length,
    macLen: 'https://pokeapi.co/api/v2/machine/'.length,
    locLen: 'https://pokeapi.co/api/v2/location/'.length,
    abiLen: 'https://pokeapi.co/api/v2/ability/'.length,
    regLen: 'https://pokeapi.co/api/v2/region/'.length,
    genLen: 'https://pokeapi.co/api/v2/generation/'.length,
    lrLen: 'https://pokeapi.co/api/v2/location-area/'.length,
};

function URLToInt(object, linkLen) {
    object.id = Number(object.url.slice(linkLen, -1));
}

// TODO : fix Evo-chain as specified in common.js
function evoChainHelperFunction(evolves_to) {
    URLToInt(evolves_to.species, CONSTANTS.specLen);
    for (const e of evolves_to.evolution_details) {
        if (e.item) URLToInt(e.item, CONSTANTS.itemLen);
        if (e.trigger) URLToInt(e.trigger, CONSTANTS.triggerLen);
        if (e.held_item) URLToInt(e.held_item, CONSTANTS.itemLen);
        if (e.known_move) URLToInt(e.known_move, CONSTANTS.moveLen);
        if (e.known_move_type) URLToInt(e.known_move_type, CONSTANTS.typeLen);
        if (e.location) URLToInt(e.location, CONSTANTS.locLen);
        if (e.party_species) URLToInt(e.party_species, CONSTANTS.specLen);
        if (e.party_type) URLToInt(e.party_type, CONSTANTS.typeLen);
        if (e.trade_species) URLToInt(e.trade_species, CONSTANTS.specLen);
    }
    if (evolves_to.evolves_to.length !== 0) {
        for (const e of evolves_to.evolves_to) {
            evoChainHelperFunction(e);
        }
    }
}

const processData = {
    'berry': function (data) {
        URLToInt(data.firmness, CONSTANTS.firmLen);
        URLToInt(data.item, CONSTANTS.itemLen);
        URLToInt(data.natural_gift_type, CONSTANTS.ngtLen);
        for (const i of data.flavors) {
            URLToInt(i.flavor, CONSTANTS.flavLen);
        }
    },

    'contest-effect': function (data) {
        for (const i of data.effect_entries) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.flavor_text_entries) {
            URLToInt(i.language, CONSTANTS.langLen);
            if (i.version) URLToInt(i.version, CONSTANTS.verLen);
        }
    },

    'language': function (data) {
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
    },

    'move-damage-class': function (data) {
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.moves) {
            URLToInt(i, CONSTANTS.moveLen);
        }
        for (const i of data.descriptions) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
    },
    'move-category': function (data) {
        for (const i of data.moves) {
            URLToInt(i, CONSTANTS.moveLen);
        }
        for (const i of data.descriptions) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
    },

    'contest-type': function (data) {
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        URLToInt(data.berry_flavor, CONSTANTS.flavLen);
    },

    'encounter-method': function (data) {
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
    },

    'growth-rate': function (data) {
        for (const i of data.descriptions) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.pokemon_species) {
            URLToInt(i, CONSTANTS.specLen);
        }
    },

    'item-attribute': function (data) {
        for (const i of data.items) {
            URLToInt(i, CONSTANTS.itemLen);
        }
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.descriptions) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
    },

    'item-fling-effect': function (data) {
        for (const i of data.items) {
            URLToInt(i, CONSTANTS.itemLen);
        }
        for (const i of data.effect_entries) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
    },

    // TODO : fix Evo-chain as specified in common.js
    'evolution-chain': function (data) {
        if (data.baby_trigger_item)
            URLToInt(data.baby_trigger_item, CONSTANTS.itemLen);
        evoChainHelperFunction(data.chain);
    },

    'evolution-trigger': function (data) {
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.pokemon_species) {
            URLToInt(i, CONSTANTS.specLen);
        }
    },

    'generation': function (data) {
        for (const i of data.abilities) {
            URLToInt(i, CONSTANTS.abiLen);
        }
        for (const i of data.moves) {
            URLToInt(i, CONSTANTS.moveLen);
        }
        for (const i of data.pokemon_species) {
            URLToInt(i, CONSTANTS.specLen);
        }
        for (const i of data.types) {
            URLToInt(i, CONSTANTS.typeLen);
        }
        for (const i of data.version_groups) {
            URLToInt(i, CONSTANTS.vgLen);
        }
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        URLToInt(data.main_region, CONSTANTS.regLen);
    },

    'item': function (data) {
        if (data.fling_effect) URLToInt(data.fling_effect, CONSTANTS.ifeLen);
        URLToInt(data.category, CONSTANTS.catLen);
        for (const i of data.attributes) {
            URLToInt(i, CONSTANTS.attLen);
        }
        for (const i of data.effect_entries) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.flavor_text_entries) {
            URLToInt(i.language, CONSTANTS.langLen);
            URLToInt(i.version_group, CONSTANTS.vgLen);
        }
        for (const i of data.game_indices) {
            URLToInt(i.generation, CONSTANTS.genLen);
        }
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.held_by_pokemon) {
            URLToInt(i.pokemon, CONSTANTS.pokeLen);
            for (const j of i.version_details) {
                URLToInt(j.version, CONSTANTS.verLen);
            }
        }
        if (data.baby_trigger_for)
            URLToInt(data.baby_trigger_for, CONSTANTS.chainLen);
        for (const i of data.machines) {
            URLToInt(i.machine, CONSTANTS.macLen);
            URLToInt(i.version_group, CONSTANTS.vgLen);
        }
    },

    'item-category': function (data) {
        for (const i of data.items) {
            URLToInt(i, CONSTANTS.itemLen);
        }
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        URLToInt(data.pocket, CONSTANTS.pocketLen);
    },

    'location': function (data) {
        if (data.region) URLToInt(data.region, CONSTANTS.regLen);
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.game_indices) {
            URLToInt(i.generation, CONSTANTS.genLen);
        }
        for (const i of data.areas) {
            URLToInt(i, CONSTANTS.lrLen);
        }
    },

    'location-area': function (data) {
        for (const i of data.names) {
            URLToInt(i.language, CONSTANTS.langLen);
        }
        for (const i of data.encounter_method_rates) {
            URLToInt(i.encounter_method, CONSTANTS.emLen);
            for (const j of i.version_details) {
                URLToInt(j.version, CONSTANTS.verLen);
            }
        }
        for (const i of data.pokemon_encounters) {
            URLToInt(i.pokemon, CONSTANTS.pokeLen);
            for (const j of i.version_details) {
                URLToInt(j.version, CONSTANTS.verLen);
            }
        }
        URLToInt(data.location, CONSTANTS.locLen);
    },
};

exports.processData = processData;
