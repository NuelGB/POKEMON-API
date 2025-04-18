const PokemonForm = require('../../../models')['pokemon-form'];

async function getPokemonForm(offset, limit) {
    return PokemonForm.find(
        {},
        {
            '_id': 0,
            '__v': 0,
            'types._id': 0,
        }
    )

        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

async function getByID(id) {
    return PokemonForm.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'types._id': 0,
        }
    );
}

async function getByName(name) {
    return PokemonForm.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'types._id': 0,
        }
    );
}

module.exports = {
    getPokemonForm,
    getByID,
    getByName,
};
