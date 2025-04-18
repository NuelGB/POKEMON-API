const growthRate = require('../../../models')['growth-rate'];

async function getByID(id) {
    return growthRate.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'createdAt': 0,
            'updatedAt': 0,
            'descriptions._id': 0,
            'levels._id': 0,
            'pokemon_species._id': 0,
        }
    );
}

async function getByName(name) {
    return growthRate.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'createdAt': 0,
            'updatedAt': 0,
            'descriptions._id': 0,
            'levels._id': 0,
            'pokemon_species._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return growthRate
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'createdAt': 0,
                'updatedAt': 0,
                'descriptions._id': 0,
                'levels._id': 0,
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
