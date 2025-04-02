const models = require('../../../models');

async function getCount(m) {
    return models[m].countDocuments({});
}

async function getList(m) {
    return models[m].find({}, { id: 1, _id: 0 });
}

async function getEndpoints() {
    const res = [];
    for (const i in models) {
        if (i === 'db') continue;
        res.push(i);
    }
    return { results: res };
}

module.exports = {
    getCount,
    getList,
    getEndpoints,
};
