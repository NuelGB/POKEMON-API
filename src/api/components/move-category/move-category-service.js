const repository = require('./move-category-repository');

async function getItem(ID) {
    return repository.getByID(ID);
}

async function getList(offset, limit) {
    return repository.getList(offset, limit);
}

module.exports = {
    getItem,
    getList,
};
