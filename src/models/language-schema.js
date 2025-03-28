const { names } = require('../utils/common-models');

module.exports = (db) =>
    db.model(
        'language',
        db.Schema({
            id: Number,
            name: String,
            official: Boolean,
            iso639: String,
            iso3166: String,
            names,
        })
    );
