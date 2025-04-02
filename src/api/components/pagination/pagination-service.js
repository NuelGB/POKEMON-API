const repository = require('./pagination-repository');

// Collects model metadata in full
async function getMetaData(m, limit, offset) {
    const count = await repository.getCount(m);
    const results = await repository.getList(m);

    let next = null;

    if (offset + limit <= count - 1 && offset > 0 && limit > 0) {
        if (limit > count - limit) {
            next = `limit=${count - limit}&offset=${offset + limit}`;
        } else {
            next = `limit=${limit}&offset=${offset + limit}`;
        }
    }

    let previous = null;

    if (offset > 0 && limit > 0) {
        if (offset - limit > 0) {
            previous = `limit=${limit}&offset=${offset - limit}`;
        } else {
            previous = `limit=${offset}&offset=0`;
        }
    }

    const returnObj = {
        count,
        next,
        previous,
        results: results.slice(offset, limit + offset),
    };
    return returnObj;
}

// Returns all endpoints available (Hopefully)
async function getEndpoints() {
    return repository.getEndpoints();
}

module.exports = {
    getMetaData,
    getEndpoints,
};
