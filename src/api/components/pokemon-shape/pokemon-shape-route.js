const express = require('express');

const controller = require('./pokemon-shape-controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/pokemon-shape', router);
    router.get('/pokemon-shape', controller.getPokemonShape);
    router.get('/:other', controller.getBy);
};
