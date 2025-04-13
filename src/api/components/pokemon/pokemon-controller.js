const service = require('./pokemon-service');
const { errorTypes, errorResponder } = require('../../../core/errors');

async function getAll(request, response, next) {
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

        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 10;
        const pokemons = await service.getPokemon(offsetValue, limitValue);

        return response.status(200).json(pokemons);
    } catch (error) {
        return next(error);
    }
}

async function getBy(request, response, next) {
    try {
        const { other } = request.params;

        const pokemons = await service.getBy(other);

        if (!pokemons) {
            throw errorResponder(errorTypes.BAD_REQUEST, `Pokemon not found`);
        }

        return response.status(200).json(pokemons);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getBy,
};
