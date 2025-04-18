const PokemonHabitat = require('../../../models')['pokemon-habitat'];

async function getPokemonHabitat(offset, limit) {
    return PokemonHabitat.find(
        {},
        {
            '_id': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
            '__v': 0,
        }
    )

        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

async function getByID(id) {
    return PokemonHabitat.findOne(
        { id },
        {
            '_id': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
            '__v': 0,
        }
    );
}

async function getByName(name) {
    return PokemonHabitat.findOne(
        { name },
        {
            '_id': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
            '__v': 0,
        }
    );
}

module.exports = {
    getPokemonHabitat,
    getByID,
    getByName,
};
