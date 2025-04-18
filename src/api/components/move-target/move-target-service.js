const repository = require('./move-target-repository');

async function getItem(ID) {
    return repository.getByID(ID);
}

async function getList(offset, limit) {
    return { offset, limit, results: await repository.getList(offset, limit) };
}

module.exports = {
    getItem,
    getList,
};
