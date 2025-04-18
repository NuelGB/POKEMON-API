const express = require('express');

const controller = require('./move-damage-class-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/move-damage-class', route);

    route.get('/move-damage-classes', controller.getList);
    route.get('/:str', controller.getBy);
};
