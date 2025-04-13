const service = require('./pokemon-shape-service');
const { errorTypes, errorResponder } = require('../../../core/errors');

async function getPokemonShape(request, response, next) {
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
                Number(limit) < 0 ||
                !Number.isInteger(Number(offset)) ||
                !Number.isInteger(Number(limit))
            ) {
                throw errorResponder(
                    errorTypes.ARGUMENT_TYPE,
                    'Offset and limit must be positive integers'
                );
            }
        }

        const offsetNumber = Number(offset) || 0;
        const limitNumber = Number(limit) || 10;
        const pokemonShape = await service.getPokemonShape(
            offsetNumber,
            limitNumber
        );
        return response.status(200).json(pokemonShape);
    } catch (error) {
        return next(error);
    }
}

async function getBy(request, response, next) {
    try {
        const { other } = request.params;

        const pokemonShape = await service.getBy(other);

        if (!pokemonShape) {
            throw errorResponder(
                errorTypes.BAD_REQUEST,
                `Pokemon shape not found`
            );
        }

        return response.status(200).json(pokemonShape);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getPokemonShape,
    getBy,
};
