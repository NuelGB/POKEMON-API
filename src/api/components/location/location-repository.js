const { location } = require('../../../models');

async function getByName(name) {
    return location.find(
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
    return location.find(
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

module.exports = {
    getByID,
    getByName,
};
