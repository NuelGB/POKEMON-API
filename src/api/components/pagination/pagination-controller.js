const service = require('./pagination-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// Returns an object with list of possible ids for the specific endpoint
async function getList(request, response, next) {
    try {
        const { name } = request.params;
        console.log(name);
        if (!require('../../../models')[name]) {
            throw errorResponder(
                errorTypes.NOT_FOUND,
                `${name} is not a valid endpoint!`
            );
        }
        let { offset, limit } = request.query;
        for (const i of [offset, limit]) {
            if (i === undefined) continue;
            const num = Number(i);
            if (Number.isNaN(num)) {
                throw errorResponder(
                    errorTypes.ARGUMENT_TYPE,
                    'Query arguments must be numbers!'
                );
            }
            if (num < 0) {
                throw errorResponder(
                    errorTypes.ARGUMENT_TYPE,
                    `Query arguments cannot be negative!`
                );
            }
            if (!Number.isInteger(num)) {
                throw errorResponder(
                    errorTypes.ARGUMENT_TYPE,
                    'Query arguments must be integers!'
                );
            }
        }
        offset = Number(offset) || 0;
        limit = Number(limit) || 20;

        const meta = await service.getMetaData(name, limit, offset);

        return response.status(200).json(meta);
    } catch (error) {
        return next(error);
    }
}

async function getEndpoints(request, response, next) {
    try {
        const results = await service.getEndpoints();

        return response.status(200).json(results);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getList,
    getEndpoints,
};
