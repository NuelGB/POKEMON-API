const itemCat = require('../../../models')['item-category'];

async function getByName(name) {
    return itemCat.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'items._id': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return itemCat.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'items._id': 0,
            'names._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return itemCat
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'items._id': 0,
                'names._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getByName,
    getList,
};
