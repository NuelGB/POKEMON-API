const express = require('express');

const controller = require('./evolution-trigger-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/evolution-trigger', route);

    route.get('/evolution-triggers' , controller.getList);
    route.get('/:str', controller.get);
};
