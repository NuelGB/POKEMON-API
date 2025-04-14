const ability = require('../../../models')['ability'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return ability.find(
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
            'pokemon._id':0,
        }
    );
}

module.exports = {
    getByID,
};
