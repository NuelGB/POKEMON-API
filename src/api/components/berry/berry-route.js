const express = require('express');

const controller = require('./berry-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/berry', route);

    route.get('/berries', controller.getList);
    route.get('/:str', controller.get);
};
