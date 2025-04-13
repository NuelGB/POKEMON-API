const service = require('./contest-effect-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function get(request, response, next) {
    try {
        const { str } = request.params;

        const dox = await service.getItem(str);

        return response.status(200).json(dox);
    } catch (error) {
        return next(error);
    }
}

async function getList(request, response, next) {
    try {
        const offset = Number(request.query.offset) || 0;
        const limit = Number(request.query.limit) || 20;

        if (offset < 0 || limit < 0) {
            throw errorResponder(
                errorTypes.ARGUMENT_TYPE,
                `Query arguments cannot be negative!`
            );
        }

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

module.exports = {
    get,
    getList,
};
