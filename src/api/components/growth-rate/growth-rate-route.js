const express = require('express');

const controller = require('./growth-rate-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/growth-rate', route);

    route.get('/growth-rates' , controller.getList);
    route.get('/:str', controller.getBy);
};
