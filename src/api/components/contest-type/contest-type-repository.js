const contestType = require('../../../models')['contest-type'];

async function getByName(name) {
    return contestType.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return contestType.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

module.exports = {
    getByID,
    getByName,
};
