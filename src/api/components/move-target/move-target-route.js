const express = require('express');

const controller = require('./move-target-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/move-target', route);
    route.get('/:str', controller.getBy);
};
