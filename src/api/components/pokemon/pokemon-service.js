const repository = require('./pokemon-repository');

async function getPokemon(offset, limit) {
    return repository.getPokemon(offset, limit);
}

async function getByID(id) {
    return repository.getByID(id);
}

async function getByName(name) {
    return repository.getByName(name);
}

module.exports = {
    getPokemon,
    getByID,
    getByName,
};
