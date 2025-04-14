const express = require('express');

const controller = require('./characteristic-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/characteristic', route);
    route.get('/:str', controller.getBy);
};
