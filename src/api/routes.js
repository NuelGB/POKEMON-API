const express = require('express');

// const books = require('./components/books/books-route');
const template = require('./components/template/route');
const pagination = require('./components/pagination/pagination-route');

module.exports = () => {
    const app = express.Router();

    // books(app);
    template(app);
    pagination(app);

    return app;
};
