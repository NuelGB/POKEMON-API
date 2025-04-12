const ability = require('../../../models')['ability'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return ability.find(
        { id },
        {
            // '_id': 0,
            // '__v': 0,
            // 'chain.evolves_to.evolution_details._id': 0,
            // 'chain.evolves_to._id': 0,
            // 'chain.evolves_to.evolves_to._id': 0,
            // 'chain.evolves_to.evolves_to.evolution_details._id': 0,
            // 'chain.evolves_to.evolves_to.evolves_to._id': 0,
            // 'chain.evolves_to.evolves_to.evolves_to.evolution_details._id': 0,
        }
    );
}

module.exports = {
    getByID,
};
