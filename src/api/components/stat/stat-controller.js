const service = require('./stat-service');
const { errorTypes, errorResponder } = require('../../../core/errors');

async function getStats(request, response, next) {
    try {
        const { offset, limit } = request.query;
        if (offset !== undefined && limit !== undefined) {
            if (Number.isNaN(Number(offset)) || Number.isNaN(Number(limit))) {
                throw errorResponder(
                    errorTypes.ARGUMENT_TYPE,
                    'Offset and limit must be numbers'
                );
            }

            if (
                Number(offset) < 0 ||
                Number(limit) <= 0 ||
                !Number.isInteger(Number(offset)) ||
                !Number.isInteger(Number(limit))
            ) {
                throw errorResponder(
                    errorTypes.ARGUMENT_TYPE,
                    'Offset and limit must be positive integers'
                );
            }
        }
        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 10;
        const stats = await service.getStats(offsetValue, limitValue);
        return response.status(200).json(stats);
    } catch (error) {
        return next(error);
    }
}

async function getBy(request, response, next) {
    try {
        const { other } = request.params;

        const stat = await service.getBy(other);

        if (!stat) {
            throw errorResponder(errorTypes.BAD_REQUEST, `Stat not found`);
        }
        return response.status(200).json(stat);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getStats,
    getBy,
};
