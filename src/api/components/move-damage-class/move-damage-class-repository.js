const movedamageclass = require('../../../models')['move-damage-class'];

async function getByID(id) {
    return movedamageclass.findOne(
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

async function getByName(name) {
    return movedamageclass.findOne(
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
        }
    );
}

async function getList(offset, limit) {
    return movedamageclass
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
        .sort({ id: 1 })
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getList,
    getByName,
};
