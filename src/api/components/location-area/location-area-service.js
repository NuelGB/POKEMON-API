const repository = require('./location-area-repository');

async function getItem(name) {
    if (/^-?\d+(\.\d+)?$/.test(name)) {
        return repository.getByID(name);
    }
    return repository.getByName(name);
}

module.exports = {
    getItem,
};
