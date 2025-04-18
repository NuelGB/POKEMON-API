const evoChain = require('../../../models')['evolution-chain'];

async function getByID(id) {
    // Filter all 3 layers of chainlink to rid of _id
    return evoChain.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'chain.evolves_to.evolution_details._id': 0,
            'chain.evolves_to._id': 0,
            'chain.evolves_to.evolves_to._id': 0,
            'chain.evolves_to.evolves_to.evolution_details._id': 0,
            'chain.evolves_to.evolves_to.evolves_to._id': 0,
            'chain.evolves_to.evolves_to.evolves_to.evolution_details._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return evoChain
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'chain.evolves_to.evolution_details._id': 0,
                'chain.evolves_to._id': 0,
                'chain.evolves_to.evolves_to._id': 0,
                'chain.evolves_to.evolves_to.evolution_details._id': 0,
                'chain.evolves_to.evolves_to.evolves_to._id': 0,
                'chain.evolves_to.evolves_to.evolves_to.evolution_details._id': 0,
            }
        )
        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getList,
};
