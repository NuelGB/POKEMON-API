const express = require('express');

const controller = require('./contest-effect-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/contest-effect', route);

    route.get('/contest-effects', controller.getList);
    route.get('/:str', controller.get);
};
