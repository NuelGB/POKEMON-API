const { NamedAPIResource, names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                cost: Number,
                fling_power: Number,
                fling_effect: NamedAPIResource,
                attributes: [NamedAPIResource],
                category: NamedAPIResource,
                effect_entries: [
                    {
                        effect: String,
                        short_effect: String,
                        language: NamedAPIResource,
                    },
                ],
                flavor_text_entries: [
                    {
                        text: String,
                        language: NamedAPIResource,
                        version_group: NamedAPIResource,
                    },
                ],
                game_indices: [
                    {
                        game_index: Number,
                        generation: NamedAPIResource,
                    },
                ],
                names,
                sprites: {
                    default: String,
                },
                held_by_pokemon: [
                    {
                        pokemon: NamedAPIResource,
                        version_details: [
                            {
                                rarity: Number,
                                version: NamedAPIResource,
                            },
                        ],
                    },
                ],
                baby_trigger_for: NamedAPIResource,
                machines: [
                    {
                        machine: {
                            id: Number,
                        },
                        version_group: NamedAPIResource,
                    },
                ],
            },
            {
                collection: name,
            }
        )
    );
