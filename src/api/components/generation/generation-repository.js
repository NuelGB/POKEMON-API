const { generation } = require('../../../models');

async function getByName(name) {
    return generation.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'moves._id': 0,
            'pokemon_species._id': 0,
            'version_groups._id': 0,
            'abilities._id': 0,
        }
    );
}

async function getByID(id) {
    return generation.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'moves._id': 0,
            'pokemon_species._id': 0,
            'version_groups._id': 0,
            'abilities._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return generation
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'names._id': 0,
                'moves._id': 0,
                'pokemon_species._id': 0,
                'version_groups._id': 0,
                'abilities._id': 0,
            }
        )
        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getByName,
    getList,
};
