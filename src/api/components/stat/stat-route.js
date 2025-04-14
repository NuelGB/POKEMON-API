const express = require('express');

const controller = require('./stat-controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/stat', router);
    router.get('/stats', controller.getStats);
    router.get('/:other', controller.getBy);
};
