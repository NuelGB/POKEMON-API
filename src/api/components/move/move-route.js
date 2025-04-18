const express = require('express');

const controller = require('./move-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/move', route);

    route.get('/moves', controller.getList);
    route.get('/:str', controller.getBy);
};
