const express = require('express');

const controller = require('./encounter-method-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/encounter-method', route);
    route.get('/:str', controller.get);
};
