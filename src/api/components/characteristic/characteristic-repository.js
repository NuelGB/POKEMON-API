const { characteristic } = require('../../../models');

async function getByID(id) {
    return characteristic.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'descriptions._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return characteristic
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'descriptions._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getList,
};
