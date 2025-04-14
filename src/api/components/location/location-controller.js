const service = require('./location-service');

// Example function to create an object and input it to the database
async function getBy(request, response, next) {
    try {
        const { str } = request.params;

        const dox = await service.getItem(str);

        return response.status(200).json(dox);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getBy,
};
