const itemAtt = require('../../../models')['item-attribute'];

async function getByName(name) {
    return itemAtt.find(
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
    return itemAtt.find(
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

module.exports = {
    getByID,
    getByName,
};