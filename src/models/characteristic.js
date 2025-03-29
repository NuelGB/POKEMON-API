const { NamedAPIResource, descriptions } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                gene_modulo: Number,
                possible_values: [Number],
                highest_stat: NamedAPIResource,
                descriptions,
            },
            {
                collection: name,
            }
        )
    );
