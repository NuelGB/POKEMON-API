const express = require('express');

const controller = require('./language-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/language', route);

    route.get('/languages', controller.getList);
    route.get('/:str', controller.get);
};
