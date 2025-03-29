const { NamedAPIResource, names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                base_experience: Number,
                height: Number,
                is_default: Boolean,
                order: Number,
                weight: Number,
                abilities: [
                    {
                        is_hidden: Boolean,
                        slot: Number,
                        ability: NamedAPIResource,
                    },
                ],
                forms: [NamedAPIResource],
                game_indices: [
                    {
                        game_index: Number,
                        version: NamedAPIResource,
                    },
                ],
                held_items: [
                    {
                        item: NamedAPIResource,
                        version_details: [
                            {
                                version: NamedAPIResource,
                                rarity: Number,
                            },
                        ],
                    },
                ],
                location_area_encounters: String,
                moves: [
                    {
                        move: NamedAPIResource,
                        version_group_details: [
                            {
                                move_learn_method: NamedAPIResource,
                                version_group: NamedAPIResource,
                                level_learned_at: Number,
                            },
                        ],
                    },
                ],
                past_types: [
                    {
                        generation: NamedAPIResource,
                        types: [
                            {
                                slot: Number,
                                type: NamedAPIResource,
                            },
                        ],
                    },
                ],
                sprites: {
                    front_default: String,
                    front_shiny: String,
                    front_female: String,
                    front_shiny_female: String,
                    back_default: String,
                    back_shiny: String,
                    back_female: String,
                    back_shiny_female: String,
                },
                cries: {
                    latest: String,
                    legacy: String,
                },
                species: NamedAPIResource,
                stats: [
                    {
                        stat: NamedAPIResource,
                        effort: Number,
                        base_stat: Number,
                    },
                ],
                types: [
                    {
                        slot: Number,
                        type: NamedAPIResource,
                    },
                ],
            },
            {
                collection: name,
            }
        )
    );
