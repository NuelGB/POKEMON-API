const models = require('../../../models');

async function getCount(m) {
    return models[m].countDocuments({});
}

async function getList(m) {
    return models[m].find({}, {id : 1, _id : 0});
}


module.exports = {
    getCount,
    getList,
};
