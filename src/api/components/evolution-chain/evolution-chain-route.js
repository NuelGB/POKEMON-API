const express = require('express');

const controller = require('./evolution-chain-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/evolution-chain', route);

    route.get('/evolution-chains', controller.getList);
    route.get('/:str', controller.getBy);
};
