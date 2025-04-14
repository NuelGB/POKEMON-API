const repository = require('./type-repository');

async function getTypes(offset, limit) {
    return repository.getTypes(offset, limit);
}

async function getBy(other) {
    if (Number.isNaN(Number(other))) {
        return repository.getByName(other);
    }
    return repository.getByID(other);
}

module.exports = {
    getTypes,
    getBy,
};
