const service = require('./pokemon-species-service');
const { errorTypes, errorResponder } = require('../../../core/errors');

async function getPokemonSpecies(request, response, next) {
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
        const pokemonSpecies = await service.getPokemonSpecies(
            offsetNumber,
            limitNumber
        );
        return response.status(200).json(pokemonSpecies);
    } catch (error) {
        return next(error);
    }
}

async function getBy(request, response, next) {
    try {
        const { other } = request.params;

        const pokemonSpecies = await service.getBy(other);

        if (!pokemonSpecies) {
            throw errorResponder(
                errorTypes.BAD_REQUEST,
                `Pokemon species not found`
            );
        }

        return response.status(200).json(pokemonSpecies);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getPokemonSpecies,
    getBy,
};
