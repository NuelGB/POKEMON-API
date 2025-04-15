const service = require('./contest-type-service');
const { generateGetListFunc } = require('../../../utils/generate');

async function getBy(request, response, next) {
    try {
        const { str } = request.params;

        const dox = await service.getItem(str);

        return response.status(200).json(dox);
    } catch (error) {
        return next(error);
    }
}

const getList = generateGetListFunc(service.getList);

module.exports = {
    getBy,
    getList,
};
