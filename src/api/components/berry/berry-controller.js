const service = require('./berry-service');

async function get(request, response, next) {
    try {
        const { str } = request.params;

        const doc = await service.getItem(str);

        return response.status(200).json(doc);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    get,
};
