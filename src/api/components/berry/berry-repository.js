const { berry } = require('../../../models');

async function getByName(name) {
    return berry.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'flavors._id': 0,
        }
    );
}

async function getByID(id) {
    return berry.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'flavors._id': 0,
        }
    );
}

module.exports = {
    getByID,
    getByName,
};
