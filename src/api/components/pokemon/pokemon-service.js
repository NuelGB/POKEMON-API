const repository = require('./pokemon-repository');

async function getPokemon(offset, limit) {
    return repository.getPokemon(offset, limit);
}

async function getBy(other) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(Number(other))) {
        return repository.getByID(other);
    }
    return repository.getByName(other);
}

module.exports = {
    getPokemon,
    getBy,
};
