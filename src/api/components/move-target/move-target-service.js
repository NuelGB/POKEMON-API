const repository = require('./move-target-repository');

async function getItem(ID) {
    return repository.getByID(ID);
}

module.exports = {
    getItem,
};
