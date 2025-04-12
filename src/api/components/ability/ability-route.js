const express = require('express');

const controller = require('./ability-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/abilities', route);
    route.get('/:str', controller.getBy);
};
