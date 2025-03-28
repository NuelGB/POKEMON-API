const express = require('express');

// const books = require('./components/books/books-route');
const template = require('./components/template/route');

module.exports = () => {
    const app = express.Router();

    // books(app);
    template(app);

    return app;
};
