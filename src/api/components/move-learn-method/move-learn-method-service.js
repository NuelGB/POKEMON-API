const repository = require('./move-learn-method-repository');

async function getItem(ID) {
    return repository.getByID(ID);
}

module.exports = {
    getItem,
};
