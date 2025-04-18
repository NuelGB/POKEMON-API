const movelearnmethod = require('../../../models')['move-learn-method'];

async function getByID(id) {
    return movelearnmethod.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'descriptions._id': 0,
            'descriptions.language._id': 0,
            'names._id': 0,
            'names.language._id': 0,
            'moves._id': 0,
            'moves.abilities._id': 0,
            'version_groups._id': 0,
        }
    );
}

async function getByName(name) {
    return movelearnmethod.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'descriptions._id': 0,
            'descriptions.language._id': 0,
            'names._id': 0,
            'names.language._id': 0,
            'moves._id': 0,
            'moves.abilities._id': 0,
            'version_groups._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return movelearnmethod
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'descriptions._id': 0,
                'descriptions.language._id': 0,
                'names._id': 0,
                'names.language._id': 0,
                'moves._id': 0,
                'moves.abilities._id': 0,
                'version_groups._id': 0,
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
