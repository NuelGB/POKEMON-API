const repository = require('./pokemon-shape-repository');

async function getPokemonShape(offset, limit) {
    return repository.getPokemonShape(offset, limit);
}

async function getBy(other) {
    if (!Number.isNaN(Number(other))) {
        return repository.getByID(Number(other));
    }
    return repository.getByName(other);
}

module.exports = {
    getPokemonShape,
    getBy,
};
