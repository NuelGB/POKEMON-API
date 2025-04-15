const itemFling = require('../../../models')['item-fling-effect'];

async function getByName(name) {
    return itemFling.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'effect_entries._id': 0,
            'items._id': 0,
        }
    );
}

async function getByID(id) {
    return itemFling.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'effect_entries._id': 0,
            'items._id': 0,
        }
    );
}

module.exports = {
    getByID,
    getByName,
};
