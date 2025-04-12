const express = require('express');

const controller = require('./generation-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/generation', route);
    route.get('/:str', controller.get);
};
