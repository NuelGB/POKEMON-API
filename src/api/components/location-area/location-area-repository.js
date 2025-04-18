const locArea = require('../../../models')['location-area'];

async function getByName(name) {
    return locArea.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'encounter_method_rates._id': 0,
            'encounter_method_rates.version_details._id': 0,
            'pokemon_encounters._id': 0,
            'pokemon_encounters.version_details._id': 0,
            'names._id': 0,
        }
    );
}

async function getByID(id) {
    return locArea.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'encounter_method_rates._id': 0,
            'encounter_method_rates.version_details._id': 0,
            'pokemon_encounters._id': 0,
            'pokemon_encounters.version_details._id': 0,
            'names._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return locArea
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'encounter_method_rates._id': 0,
                'encounter_method_rates.version_details._id': 0,
                'pokemon_encounters._id': 0,
                'pokemon_encounters.version_details._id': 0,
                'names._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getByName,
    getList,
};
