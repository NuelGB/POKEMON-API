const characteristic = require('../../../models')['characteristic'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return characteristic.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'descriptions._id': 0,
        }
    );
}

module.exports = {
    getByID,
};
