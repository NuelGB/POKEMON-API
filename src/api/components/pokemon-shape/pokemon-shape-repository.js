const PokemonShape = require('../../../models')['pokemon-shape'];

async function getPokemonShape(offset, limit) {
    return PokemonShape.find(
        {},
        {
            '_id': 0,
            'awesome_names._id': 0,
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
    return PokemonShape.findOne(
        { id },
        {
            '_id': 0,
            'awesome_names._id': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
            '__v': 0,
        }
    );
}

async function getByName(name) {
    return PokemonShape.findOne(
        { name },
        {
            '_id': 0,
            'awesome_names._id': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
            '__v': 0,
        }
    );
}

module.exports = {
    getPokemonShape,
    getByID,
    getByName,
};
