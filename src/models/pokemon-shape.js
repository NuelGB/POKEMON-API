const { NamedAPIResource, names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                awesome_names: [
                    {
                        awesome_name: String,
                        language: NamedAPIResource,
                    },
                ],
                names,
                pokemon_species: [NamedAPIResource],
            },
            {
                collection: name,
            }
        )
    );
