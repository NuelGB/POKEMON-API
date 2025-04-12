const repository = require('./contest-effect-repository');

async function getItem(name) {
    return repository.getByID(name);
}
module.exports = {
    getItem,
};
