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

async function getByID(request, response, next) {
    try {
        const { id } = request.params;

        const postedDocument = await service.getByID(Number(id));

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

async function getByName(request, response, next) {
    try {
        const { name } = request.params;

        const postedDocument = await service.getByName(name);

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getByID,
    getByName,
};
