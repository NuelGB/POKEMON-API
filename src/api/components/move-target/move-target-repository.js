const movetarget = require('../../../models')['move-target'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return movetarget.find(
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
        }
    );
}

module.exports = {
    getByID,
};
