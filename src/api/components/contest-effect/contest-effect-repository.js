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

module.exports = {
    getByID,
};
