const Pokemon = require('../../../models').pokemon;

async function getPokemon(offset, limit) {
    return Pokemon.find(
        {},
        {
            _id: 0,
            name: 1,
            id: 1,
            height: 1,
            weight: 1,
        }
    )

        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

async function getByID(id) {
    return Pokemon.findOne(
        { id: Number(id) },
        {
            '_id': 0,
            'game_indices._id': 0,
            'abilities._id': 0,
            'types._id': 0,
            'stats._id': 0,
            'moves._id': 0,
            'held_items._id': 0,
            'forms._id': 0,
            'moves.version_group_details._id': 0,
            '__v': 0,
        }
    );
}

async function getByName(name) {
    return Pokemon.findOne(
        { name },
        {
            '_id': 0,
            'game_indices._id': 0,
            'abilities._id': 0,
            'types._id': 0,
            'stats._id': 0,
            'moves._id': 0,
            'held_items._id': 0,
            'forms._id': 0,
            'moves.version_group_details._id': 0,
            '__v': 0,
        }
    );
}

module.exports = {
    getPokemon,
    getByID,
    getByName,
};
