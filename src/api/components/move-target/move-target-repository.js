const movetarget = require('../../../models')['move-target'];

async function getByID(id) {
    return movetarget.find(
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
        }
    );
}

async function getList(offset, limit) {
    return movetarget
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
            }
        )
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getList,
};
