const repository = require('./pokemon-form-repository');

async function getPokemonForm(offset, limit) {
    return repository.getPokemonForm(offset, limit);
}

async function getBy(other) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(Number(other))) {
        return repository.getByID(Number(other));
    }
    return repository.getByName(other);
}

module.exports = {
    getPokemonForm,
    getBy,
};
