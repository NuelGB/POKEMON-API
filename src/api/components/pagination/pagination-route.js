const express = require('express');

const controller = require('./pagination-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/', route);

    route.get('/:name', controller.getList);
    route.get('/', controller.getEndpoints);
};
