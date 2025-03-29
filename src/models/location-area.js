const { NamedAPIResource, names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                game_index: Number,
                encounter_method_rates: [
                    {
                        encounter_method: NamedAPIResource,
                        version_details: [
                            {
                                rate: Number,
                                version: NamedAPIResource,
                            },
                        ],
                    },
                ],
                location: NamedAPIResource,
                names,
                pokemon_encounters: [
                    {
                        pokemon: NamedAPIResource,
                        version_details: [
                            {
                                rate: Number,
                                version: NamedAPIResource,
                            },
                        ],
                    },
                ],
            },
            {
                collection: name,
            }
        )
    );
