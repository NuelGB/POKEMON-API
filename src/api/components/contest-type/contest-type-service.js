const repository = require('./contest-type-repository');

async function getItem(name) {
    if (/^-?\d+(\.\d+)?$/.test(name)) {
        return repository.getByID(name);
    }
    return repository.getByName(name);
}

module.exports = {
    getItem,
};

module.exports = {
    getItem,
};
