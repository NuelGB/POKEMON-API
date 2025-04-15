const service = require('./encounter-method-service');
const {generateGetListFunc} = require('../../../utils/generate');

async function get(request, response, next) {
    try {
        const { str } = request.params;

        const postedDocument = await service.getItem(str);

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

const getList = generateGetListFunc(service.getList);

module.exports = {
    get,
    getList,
};
