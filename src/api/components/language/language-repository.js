const { language } = require('../../../models');

async function getByName(name) {
    return language.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return language.findOne(
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
        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getByName,
    getList,
};
