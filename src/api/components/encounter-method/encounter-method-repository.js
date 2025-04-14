const encounterMethod = require('../../../models')['encounter-method'];

async function getByName(name) {
    return encounterMethod.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return encounterMethod.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return encounterMethod
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
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
