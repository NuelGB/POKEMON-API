const repository = require('./evolution-chain-repository');

async function getItem(ID) {
    return repository.getByID(ID);
}

module.exports = {
    getItem,
};
