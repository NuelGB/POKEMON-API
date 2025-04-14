const repository = require('./item-category-repository');

async function getItem(name) {
    if (/^-?\d+(\.\d+)?$/.test(name)) {
        return repository.getByID(name);
    }
    return repository.getByName(name);
}

module.exports = {
    getItem,
};