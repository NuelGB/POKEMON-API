const { berry } = require('../../../models');

async function getByName(name) {
    return berry.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'flavors._id': 0,
        }
    );
}

async function getByID(id) {
    return berry.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'flavors._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return berry
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'flavors._id': 0,
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
