const repository = require('./language-repository');

async function getItem(name) {
    if (/^-?\d+(\.\d+)?$/.test(name)) {
        return repository.getByID(name);
    }
    return repository.getByName(name);
}

async function getList(offset, limit) {
    return repository.getList(offset, limit);
}

module.exports = {
    getItem,
    getList,
};
