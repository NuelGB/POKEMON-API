const { type } = require('../../../models');

async function getTypes(offset, limit) {
    return type
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'names._id': 0,
                'game_indices._id': 0,
                'pokemon._id': 0,
                'moves._id': 0,
                'damage_relations.double_damage_to._id': 0,
                'damage_relations.double_damage_from._id': 0,
                'damage_relations.half_damage_to._id': 0,
                'damage_relations.half_damage_from._id': 0,
                'damage_relations.no_damage_to._id': 0,
                'damage_relations.no_damage_from._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

async function getByID(id) {
    return type.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'game_indices._id': 0,
            'pokemon._id': 0,
            'moves._id': 0,
            'damage_relations.double_damage_to._id': 0,
            'damage_relations.double_damage_from._id': 0,
            'damage_relations.half_damage_to._id': 0,
            'damage_relations.half_damage_from._id': 0,
            'damage_relations.no_damage_to._id': 0,
            'damage_relations.no_damage_from._id': 0,
        }
    );
}

async function getByName(name) {
    return type.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'game_indices._id': 0,
            'pokemon._id': 0,
            'moves._id': 0,
            'damage_relations.double_damage_to._id': 0,
            'damage_relations.double_damage_from._id': 0,
            'damage_relations.half_damage_to._id': 0,
            'damage_relations.half_damage_from._id': 0,
            'damage_relations.no_damage_to._id': 0,
            'damage_relations.no_damage_from._id': 0,
        }
    );
}

module.exports = {
    getTypes,
    getByID,
    getByName,
};
