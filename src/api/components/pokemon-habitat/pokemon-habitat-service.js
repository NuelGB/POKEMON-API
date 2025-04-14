const repository = require('./pokemon-habitat-repository');

async function getPokemonHabitat(offset, limit) {
    return repository.getPokemonHabitat(offset, limit);
}

async function getBy(other) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(Number(other))) {
        return repository.getByID(other);
    }
    return repository.getByName(other);
}

module.exports = {
    getPokemonHabitat,
    getBy,
};
