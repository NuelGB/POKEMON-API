const { ability } = require('../../../models');

async function getByID(id) {
    return ability.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'effect_changes.effect_entries._id': 0,
            'effect_changes._id': 0,
            'effect_entries._id': 0,
            'flavor_text_entries._id': 0,
            'names._id': 0,
            'generation._id': 0,
            'pokemon._id': 0,
        }
    );
}

async function getByName(name) {
    return ability.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'effect_changes.effect_entries._id': 0,
            'effect_changes._id': 0,
            'effect_entries._id': 0,
            'flavor_text_entries._id': 0,
            'names._id': 0,
            'generation._id': 0,
            'pokemon._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return ability
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'effect_changes.effect_entries._id': 0,
                'effect_changes._id': 0,
                'effect_entries._id': 0,
                'flavor_text_entries._id': 0,
                'names._id': 0,
                'generation._id': 0,
                'pokemon._id': 0,
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
