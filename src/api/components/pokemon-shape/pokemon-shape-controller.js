const service = require('./pokemon-shape-service');

async function getPokemonShape(request, response, next) {
    try {
        const { offset, limit } = request.query;
        console.log('offset', offset);
        console.log('limit', limit);

        if (offset !== undefined && limit !== undefined) {
            if (Number.isNaN(Number(offset)) || Number.isNaN(Number(limit))) {
                return response
                    .status(400)
                    .json({ message: 'Offset and limit must be numbers' });
            }

            if (
                Number(offset) < 0 ||
                Number(limit) < 0 ||
                !Number.isInteger(Number(offset)) ||
                !Number.isInteger(Number(limit))
            ) {
                return response.status(400).json({
                    message: 'Offset and limit must be positive integers',
                });
            }
        }

        const offsetNumber = Number(offset) || 0;
        const limitNumber = Number(limit) || 10;
        const postedDocument = await service.getPokemonShape(
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
                .json({ message: 'Pokemon shape not found' });
        }

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getPokemonShape,
    getBy,
};
