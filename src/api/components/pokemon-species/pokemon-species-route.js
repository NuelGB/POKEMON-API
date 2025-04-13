const express = require('express');

const controller = require('./pokemon-species-controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/pokemon-species', router);
    router.get('/pokemon-species', controller.getPokemonSpecies);
    router.get('/:other', controller.getBy);
};
