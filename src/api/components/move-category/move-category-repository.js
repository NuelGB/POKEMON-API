const movecategory = require('../../../models')['move-category'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return movecategory.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'moves._id': 0,
            'moves.learn_method._id': 0,
            'descriptions._id': 0,
            'descriptions.language._id': 0,
        }
    );
}

module.exports = {
    getByID,
};
