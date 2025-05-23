const itemFling = require('../../../models')['item-fling-effect'];

async function getByName(name) {
    return itemFling.findOne(
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
    return itemFling.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'effect_entries._id': 0,
            'items._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return itemFling
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'effect_entries._id': 0,
                'items._id': 0,
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
