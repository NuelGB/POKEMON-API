const service = require('./pokemon-form-service');

async function getPokemonForm(request, response, next) {
    try {
        const { offset, limit } = request.query;
        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 10;

        const postedDocuments = await service.getPokemonForm(
            offsetValue,
            limitValue
        );

        return response.status(200).json(postedDocuments);
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
    getPokemonForm,
    getBy,
};
