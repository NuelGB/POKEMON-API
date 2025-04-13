const service = require('./type-service');

async function getTypes(request, response, next) {
    try {
        const { offset, limit } = request.query;
        if (offset !== undefined && limit !== undefined) {
            if (Number.isNaN(Number(offset)) || Number.isNaN(Number(limit))) {
                return response
                    .status(400)
                    .json({ message: 'Offset and limit must be numbers' });
            }

            if (
                Number(offset) < 0 ||
                Number(limit) <= 0 ||
                !Number.isInteger(Number(offset)) ||
                !Number.isInteger(Number(limit))
            ) {
                return response.status(400).json({
                    message: 'Offset and limit must be positive numbers',
                });
            }
        }
        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 20;
        const types = await service.getTypes(offsetValue, limitValue);
        return response.status(200).json(types);
    } catch (error) {
        return next(error);
    }
}

async function getBy(request, response, next) {
    try {
        const { other } = request.params;

        const type = await service.getBy(other);

        if (!type) {
            return response.status(404).json({ message: 'Type not found' });
        }
        return response.status(200).json(type);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getTypes,
    getBy,
};
