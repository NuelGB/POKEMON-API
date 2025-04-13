const express = require('express');

// const books = require('./components/books/books-route');
const template = require('./components/template/route');
const pagination = require('./components/pagination/pagination-route');
const evoChain = require('./components/evolution-chain/evolution-chain-route');
const ability = require('./components/ability/ability-route');
const characteristic = require('./components/characteristic/characteristic-route');
const movetarget = require('./components/move-target/move-target-route');
const movecategory = require('./components/move-category/move-category-route');
const movedamageclass = require('./components/move-damage-class/move-damage-class-route');
const movelearnmethod = require('./components/move-learn-method/move-learn-method-route');
const growthRate = require('./components/growth-rate/growth-rate-route');

module.exports = () => {
    const app = express.Router();

    // books(app);
    template(app);
    pagination(app);
    evoChain(app);
    ability(app);
    characteristic(app);
    movetarget(app);
    movecategory(app);
    movedamageclass(app);
    movelearnmethod(app);
    growthRate(app);
    return app;
};
