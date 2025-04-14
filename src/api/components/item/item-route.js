const express = require('express');

const controller = require('./item-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/item', route);

    route.get('/:str', controller.getBy);
};
