const { stat } = require('../../../models');

async function getStats(offset, limit) {
    return stat
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'characteristics._id': 0,
                'names._id': 0,
                'affecting_moves.increase._id': 0,
                'affecting_moves.decrease._id': 0,
                'affecting_natures.increase._id': 0,
                'affecting_natures.decrease._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

async function getByID(id) {
    return stat.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'characteristics._id': 0,
            'names._id': 0,
            'affecting_moves.increase._id': 0,
            'affecting_moves.decrease._id': 0,
            'affecting_natures.increase._id': 0,
            'affecting_natures.decrease._id': 0,
        }
    );
}

async function getByName(name) {
    return stat.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'characteristics._id': 0,
            'names._id': 0,
            'affecting_moves.increase._id': 0,
            'affecting_moves.decrease._id': 0,
            'affecting_natures.increase._id': 0,
            'affecting_natures.decrease._id': 0,
        }
    );
}

module.exports = {
    getStats,
    getByID,
    getByName,
};
