const pokemonSpecies = require('../../../models')['pokemon-species'];

async function getPokemonSpecies(offset, limit) {
    return pokemonSpecies
        .find(
            {},
            {
                '_id': 0,
                'names._id': 0,
                'flavor_text_entries._id': 0,
                'pokedex_numbers._id': 0,
                'egg_groups._id': 0,
                'pal_park_encounters._id': 0,
                'genera._id': 0,
                'varieties._id': 0,
                '__v': 0,
            }
        )
        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

async function getByID(id) {
    return pokemonSpecies.findOne(
        { id },
        {
            '_id': 0,
            'names._id': 0,
            'flavor_text_entries._id': 0,
            'pokedex_numbers._id': 0,
            'egg_groups._id': 0,
            'pal_park_encounters._id': 0,
            'genera._id': 0,
            'varieties._id': 0,
            '__v': 0,
        }
    );
}

async function getByName(name) {
    return pokemonSpecies.findOne(
        { name },
        {
            '_id': 0,
            'names._id': 0,
            'flavor_text_entries._id': 0,
            'pokedex_numbers._id': 0,
            'egg_groups._id': 0,
            'pal_park_encounters._id': 0,
            'genera._id': 0,
            'varieties._id': 0,
            '__v': 0,
        }
    );
}

module.exports = {
    getPokemonSpecies,
    getByID,
    getByName,
};
