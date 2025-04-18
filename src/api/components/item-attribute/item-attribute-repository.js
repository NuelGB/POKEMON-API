const itemAtt = require('../../../models')['item-attribute'];

async function getByName(name) {
    return itemAtt.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'items._id': 0,
            'names._id': 0,
            'descriptions._id': 0,
        }
    );
}

async function getByID(id) {
    return itemAtt.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'items._id': 0,
            'names._id': 0,
            'descriptions._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return itemAtt
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'items._id': 0,
                'names._id': 0,
                'descriptions._id': 0,
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
