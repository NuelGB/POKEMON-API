const repository = require('./contest-effect-repository');

async function getItem(name) {
    return repository.getByID(name);
}

async function getList(offset, limit) {
    return {
        offset,
        limit,
        results: await repository.getList(offset, limit),
    };
}
module.exports = {
    getItem,
    getList,
};
