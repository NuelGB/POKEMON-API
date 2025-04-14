const growthRate = require('../../../models')['growth-rate'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return growthRate.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'createdAt': 0,
            'updatedAt': 0,
            'descriptions._id': 0,
            'levels._id': 0,
            'pokemon_species._id': 0,
        }
    );
}

module.exports = {
    getByID,
};
