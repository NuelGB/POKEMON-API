const service = require('./move-target-service');

async function getBy(request, response, next) {
    try {
        const { str } = request.params;

        const postedDocument = await service.getItem(Number(str));

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getBy,
};
