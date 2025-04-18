const { item } = require('../../../models');

async function getByName(name) {
    return item.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'attributes._id': 0,
            'names._id': 0,
            'effect_entries._id': 0,
            'flavor_text_entries._id': 0,
            'game_indices._id': 0,
            'held_by_pokemon._id': 0,
            'machines._id': 0,
        }
    );
}

async function getByID(id) {
    return item.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'attributes._id': 0,
            'names._id': 0,
            'effect_entries._id': 0,
            'flavor_text_entries._id': 0,
            'game_indices._id': 0,
            'held_by_pokemon._id': 0,
            'machines._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return item
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'attributes._id': 0,
                'names._id': 0,
                'effect_entries._id': 0,
                'flavor_text_entries._id': 0,
                'game_indices._id': 0,
                'held_by_pokemon._id': 0,
                'machines._id': 0,
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
