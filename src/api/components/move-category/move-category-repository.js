const movecategory = require('../../../models')['move-category'];

async function getByID(id) {
    return movecategory.find(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'moves._id': 0,
            'moves.learn_method._id': 0,
            'descriptions._id': 0,
            'descriptions.language._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return movecategory
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'moves._id': 0,
                'moves.learn_method._id': 0,
                'descriptions._id': 0,
                'descriptions.language._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getList,
};
