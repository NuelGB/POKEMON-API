const express = require('express');

const controller = require('./move-learn-method-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/move-learn-method', route);
    route.get('/:str', controller.getBy);
};
