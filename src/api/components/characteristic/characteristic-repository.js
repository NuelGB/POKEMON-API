const characteristic = require('../../../models')['characteristic-chain'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return characteristic.find(
        { id },
        {
            // '_id': 0,
            // '__v': 0,
            // 'descriptions._id': 0,
            // 'descriptions.language._id': 0,
            // 'names._id': 0,
            // 'names.language._id': 0,
            // 'types._id': 0,
            // 'types.abilities._id': 0,
        }
    );
}

module.exports = {
    getByID,
};
