const express = require('express');

// const books = require('./components/books/books-route');
const template = require('./components/template/route');
const pagination = require('./components/pagination/pagination-route');
const evoChain = require('./components/evolution-chain/evolution-chain-route');
const item = require('./components/item/item-route');
const itemAtt = require('./components/item-attribute/item-attribute-route');
const itemCat = require('./components/item-category/item-category-route');
const itemFling = require('./components/item-fling-effect/item-fling-effect-route');
const location = require('./components/location/location-route');
const locArea = require('./components/location-area/location-area-route');
const move = require('./components/move/move-route');

module.exports = () => {
    const app = express.Router();

    // books(app);
    template(app);
    pagination(app);
    evoChain(app);
    item(app);
    itemAtt(app);
    itemCat(app);
    itemFling(app);
    location(app);
    locArea(app);
    move(app);

    return app;
};
