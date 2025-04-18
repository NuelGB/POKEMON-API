const contestType = require('../../../models')['contest-type'];

async function getByName(name) {
    return contestType.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return contestType.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return contestType
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
