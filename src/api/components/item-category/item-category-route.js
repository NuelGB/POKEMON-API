const express = require('express');

const controller = require('./item-category-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/item-category', route);

    route.get('/item-categories', controller.getList);
    route.get('/:str', controller.getBy);
};
