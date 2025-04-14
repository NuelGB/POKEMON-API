const express = require('express');

const controller = require('./type-controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/type', router);
    router.get('/types', controller.getTypes);
    router.get('/:other', controller.getBy);
};
