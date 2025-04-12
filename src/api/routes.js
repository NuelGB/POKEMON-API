const express = require('express');

// const books = require('./components/books/books-route');
const template = require('./components/template/route');
const pagination = require('./components/pagination/pagination-route');
const evoChain = require('./components/evolution-chain/evolution-chain-route');
const abilities = require('./components/abilities/abilities-route');

module.exports = () => {
    const app = express.Router();

    // books(app);
    template(app);
    pagination(app);
    evoChain(app);
    abilities(app);
    return app;
};
