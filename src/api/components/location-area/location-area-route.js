const express = require('express');

const controller = require('./location-area-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/location-area', route);

    route.get('/:str', controller.getBy);
};
