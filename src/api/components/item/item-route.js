const express = require('express');

const controller = require('./item-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/item', route);

    route.get('/items', controller.getList);
    route.get('/:str', controller.getBy);
};
