const express = require('express');

const controller = require('./location-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/location', route);

    route.get('/locations', controller.getList);
    route.get('/:str', controller.getBy);
};
