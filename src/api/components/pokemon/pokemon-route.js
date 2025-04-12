const express = require('express');

const controller = require('./pokemon-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/pokemon', route);
    route.get('/pokemon', controller.getAll);
    route.get('/:id', controller.getByID);
    route.get('/name/:name', controller.getByName);
};
