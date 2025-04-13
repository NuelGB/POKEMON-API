const repository = require('./pokemon-species-repository');

async function getPokemonSpecies(offset, limit) {
    return repository.getPokemonSpecies(offset, limit);
}

async function getBy(other) {
    if (!Number.isNaN(Number(other))) {
        return repository.getByID(Number(other));
    }
    return repository.getByName(other);
}

module.exports = {
    getPokemonSpecies,
    getBy,
};
