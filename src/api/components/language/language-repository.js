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

async function getList(offset, limit) {
    return language
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
