const express = require('express');

const controller = require('./pokemon-form-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/pokemon-form', route);
    route.get('/pokemon-form', controller.getPokemonForm);
    route.get('/:other', controller.getBy);
};
