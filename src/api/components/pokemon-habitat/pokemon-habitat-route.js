const express = require('express');

const controller = require('./pokemon-habitat-controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/pokemon-habitat', router);
    router.get('/pokemon-habitat', controller.getPokemonHabitat);
    router.get('/:other', controller.getBy);
};
