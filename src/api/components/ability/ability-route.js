const express = require('express');

const controller = require('./ability-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/ability', route);

    route.get('/abilities', controller.getList);
    route.get('/:str', controller.getBy);
};
