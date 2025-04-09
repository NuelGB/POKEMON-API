const express = require('express');

const template = require('./components/template/route');
const pagination = require('./components/pagination/pagination-route');
const evoChain = require('./components/evolution-chain/evolution-chain-route');
const berry = require('./components/berry/berry-route');
const contestEffect = require('./components/contest-effect/contest-effect-route');
const contestType = require('./components/contest-type/contest-type-route');

module.exports = () => {
    const app = express.Router();

    template(app);
    pagination(app);
    evoChain(app);
    berry(app);
    contestEffect(app);
    contestType(app);

    return app;
};
