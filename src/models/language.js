const { names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                official: Boolean,
                iso639: String,
                iso3166: String,
                names,
            },
            {
                collection: name,
            }
        )
    );
