const evoTrig = require('../../../models')['evolution-trigger'];

async function getByName(name) {
    return evoTrig.findOne(
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
    return evoTrig.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'pokemon_species._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return evoTrig
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'names._id': 0,
                'pokemon_species._id': 0,
            }
        )
        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getByName,
    getList,
};
