const repository = require('./growth-rate-repository');

async function getItem(ID) {
    return repository.getByID(ID);
}

module.exports = {
    getItem,
};
