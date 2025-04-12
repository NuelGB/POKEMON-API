const Pokemon = require('../../../models').pokemon;

async function getPokemon(offset, limit) {
    return Pokemon.find({})
        .skip(offset)
        .limit(limit)
        .select('name height weight');
}

async function getByID(id) {
    return Pokemon.findOne({ id: Number(id) });
}

async function getByName(name) {
    return Pokemon.findOne({ name });
}

module.exports = {
    getPokemon,
    getByID,
    getByName,
};
