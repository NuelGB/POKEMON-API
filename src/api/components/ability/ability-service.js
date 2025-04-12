const repository = require('./abilities-repository');

async function getItem(ID) {
    return repository.getByID(ID);
}

module.exports = {
    getItem,
};
