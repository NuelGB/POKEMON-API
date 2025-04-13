const service = require('./pokemon-species-service');

async function getPokemonSpecies(request, response, next) {
    try {
        const { offset, limit } = request.query;

        if (offset !== undefined && limit !== undefined) {
            if (Number.isNaN(Number(offset)) || Number.isNaN(Number(limit))) {
                return response
                    .status(400)
                    .json({ message: 'Offset and limit must be a number' });
            }

            if (
                Number(offset) < 0 ||
                Number(limit) < 0 ||
                !Number.isInteger(Number(offset)) ||
                !Number.isInteger(Number(limit))
            ) {
                return response.status(400).json({
                    message: 'Offset and limit must be a positive number',
                });
            }
        }

        const offsetNumber = Number(offset) || 0;
        const limitNumber = Number(limit) || 10;
        const postedDocument = await service.getPokemonSpecies(
            offsetNumber,
            limitNumber
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

        if (!postedDocument) {
            return response
                .status(404)
                .json({ message: 'Pokemon species not found' });
        }

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getPokemonSpecies,
    getBy,
};
