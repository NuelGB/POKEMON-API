const {generation} = require('../../../models');

async function getByName(name) {
    return generation.find(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'moves._id' : 0,
            'pokemon_species._id' : 0,
            'version_groups._id' : 0,
            'abilities._id':0,
        }
    );
}

async function getByID(id) {
    return generation.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'names._id': 0,
            'moves._id' : 0,
            'pokemon_species._id' : 0,
            'version_groups._id': 0,
            'abilities._id' : 0,
        }
    );
}

module.exports = {
    getByID,
    getByName,
};
