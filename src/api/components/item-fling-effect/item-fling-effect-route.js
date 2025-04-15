const express = require('express');

const controller = require('./item-fling-effect-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/item-fling-effect', route);

    route.get('/:str', controller.getBy);
};
