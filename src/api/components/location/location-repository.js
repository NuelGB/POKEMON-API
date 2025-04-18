const { location } = require('../../../models');

async function getByName(name) {
    return location.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'game_indices._id': 0,
            'areas._id': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return location.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'game_indices._id': 0,
            'areas._id': 0,
            'names._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return location
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'game_indices._id': 0,
                'areas._id': 0,
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
