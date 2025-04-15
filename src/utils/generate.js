const { errorResponder, errorTypes } = require('../core/errors');

function generateGetListFunc(getList) {
    return async (request, response, next) => {
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

            const doc = await getList(offset, limit);

            return response.status(200).json({
                offset,
                limit,
                data: doc,
            });
        } catch (error) {
            return next(error);
        }
    };
}

module.exports = {
    generateGetListFunc,
};
