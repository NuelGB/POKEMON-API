const repository = require('./stat-repository');

async function getStats(offset, limit) {
    return repository.getStats(offset, limit);
}

async function getBy(other) {
    if (!Number.isNaN(Number(other))) {
        return repository.getByID(Number(other));
    }
    return repository.getByName(other);
}

module.exports = {
    getStats,
    getBy,
};
