const express = require('express');

const controller = require('./move-category-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/move-category', route);

    route.get('/move-categories', controller.getList);
    route.get('/:str', controller.getBy);
};
