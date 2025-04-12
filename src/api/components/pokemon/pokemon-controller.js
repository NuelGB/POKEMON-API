const service = require('./pokemon-service');

async function getAll(request, response, next) {
    try {
        const { offset, limit } = request.query;
        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 10;
        const postedDocument = await service.getPokemon(
            offsetValue,
            limitValue
        );

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

async function getBy(request, response, next) {
    try {
        const { other } = request.params;

        const postedDocument = await service.getBy(other);

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getBy,
};
