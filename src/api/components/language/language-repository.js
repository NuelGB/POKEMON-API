const { language } = require('../../../models');

async function getByName(name) {
    return language.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return language.find(
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
