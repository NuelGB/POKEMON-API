const service = require('./service');
const { errorResponder, errorTypes } = require('../../../core/errors');

//Example function to create an object and input it to the database
async function post(request, response, next) {
  try {
    const body  = request.body;
    const condition = "Test for data validity";

    if (!condition) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'error thrown');
    }

    const postedDocument = await service.create(body);

    return response.status(200).json(postedDocument);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  post
};
