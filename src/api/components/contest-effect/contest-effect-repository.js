const contestEffect = require('../../../models')['contest-effect'];

async function getByID(id) {
    return contestEffect.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'effect_entries._id': 0,
            'flavor_text_entries._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return contestEffect
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'effect_entries._id': 0,
                'flavor_text_entries._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getList,
};
