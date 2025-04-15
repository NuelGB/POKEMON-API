const service = require('./ability-service');
const {generateGetListFunc} = require('../../../utils/generate');

async function getBy(request, response, next) {
    try {
        const { str } = request.params;

        const postedDocument = await service.getItem(Number(str));

        return response.status(200).json(postedDocument);
    } catch (error) {
        return next(error);
    }
}

const getList = generateGetListFunc(service.getList);

module.exports = {
    getBy,
    getList,
};
