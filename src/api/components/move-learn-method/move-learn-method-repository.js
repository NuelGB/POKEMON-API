const movelearnmethod = require('../../../models')['move-learn-method'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return movelearnmethod.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'descriptions._id': 0,
            'descriptions.language._id': 0,
            'names._id': 0,
            'names.language._id': 0,
            'moves._id': 0,
            'moves.abilities._id': 0,
            'version_groups._id': 0,
        }
    );
}

module.exports = {
    getByID,
};
