const express = require('express');

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
const berry = require('./components/berry/berry-route');
const contestEffect = require('./components/contest-effect/contest-effect-route');
const contestType = require('./components/contest-type/contest-type-route');
const encounterMethod = require('./components/encounter-method/encounter-method-route');
const evoTrig = require('./components/evolution-trigger/evolution-trigger-route');
const generation = require('./components/generation/generation-route');
const language = require('./components/language/language-route');
const pokemon = require('./components/pokemon/pokemon-route');
const pokemonForm = require('./components/pokemon-form/pokemon-form-route');
const pokemonHabitat = require('./components/pokemon-habitat/pokemon-habitat-route');
const pokemonShape = require('./components/pokemon-shape/pokemon-shape-route');
const pokemonSpecies = require('./components/pokemon-species/pokemon-species-route');
const stat = require('./components/stat/stat-route');
const type = require('./components/type/type-route');

module.exports = () => {
    const app = express.Router();

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
    berry(app);
    contestEffect(app);
    contestType(app);
    encounterMethod(app);
    evoTrig(app);
    generation(app);
    language(app);
    pokemon(app);
    pokemonForm(app);
    pokemonHabitat(app);
    pokemonShape(app);
    pokemonSpecies(app);
    stat(app);
    type(app);

    return app;
};
