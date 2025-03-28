const { NamedAPIResource, descriptions } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                formula: String,
                descriptions,
                levels: [
                    {
                        level: Number,
                        experience: Number,
                    },
                ],
                pokemon_species: [NamedAPIResource],
            },
            {
                collection: name,
            }
        )
    );
