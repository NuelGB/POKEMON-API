const service = require('./berry-service');
const { errorTypes, errorResponder } = require('../../../core/errors');

async function getList(request, response, next) {
    try {
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
        limit = Number(limit) || 10;

        const doc = await service.getList(offset, limit);

        return response.status(200).json({
            offset,
            limit,
            data: doc,
        });
    } catch (error) {
        return next(error);
    }
}

async function get(request, response, next) {
    try {
        const { str } = request.params;

        const doc = await service.getItem(str);

        return response.status(200).json(doc);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    get,
    getList,
};
