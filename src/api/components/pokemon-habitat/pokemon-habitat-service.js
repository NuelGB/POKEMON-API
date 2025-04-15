const repository = require('./pokemon-habitat-repository');

async function getPokemonHabitat(offset, limit) {
    return repository.getPokemonHabitat(offset, limit);
}

async function getBy(other) {
    if (!Number.isNaN(Number(other))) {
        return repository.getByID(Number(other));
    }
    return repository.getByName(other);
}

module.exports = {
    getPokemonHabitat,
    getBy,
};
