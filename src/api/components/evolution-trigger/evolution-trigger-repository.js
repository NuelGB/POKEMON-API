const evoTrig = require('../../../models')['evolution-trigger'];

async function getByName(name) {
    return evoTrig.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
        }
    );
}

async function getByID(id) {
    return evoTrig.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
        }
    );
}

module.exports = {
    getByID,
    getByName,
};
