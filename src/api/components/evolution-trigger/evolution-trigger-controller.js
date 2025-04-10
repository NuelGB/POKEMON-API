const service = require('./evolution-trigger-service');

async function get(request, response, next) {
    try {
        const { str } = request.params;

        const postedDocument = await service.getItem(str);

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    get,
};
