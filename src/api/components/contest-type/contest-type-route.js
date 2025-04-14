const express = require('express');

const controller = require('./contest-type-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/contest-type', route);

    route.get('/contest-types', controller.getList);
    route.get('/:str', controller.getBy);
};
