const express = require('express');

const controller = require('./item-attribute-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/item-attribute', route);

    route.get('/:str', controller.getBy);
};