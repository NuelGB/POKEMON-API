const { names, NamedAPIResource } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                is_main_series: Boolean,
                generation: NamedAPIResource,
                names,
                effect_entries: [
                    {
                        effect: String,
                        short_effect: String,
                        language: NamedAPIResource,
                    },
                ],
                effect_changes: [
                    {
                        effect_entries: [
                            {
                                effect: String,
                                language: NamedAPIResource,
                            },
                        ],
                        version_group: NamedAPIResource,
                    },
                ],
                flavor_text_entries: [
                    {
                        flavor_text: String,
                        language: NamedAPIResource,
                        version_group: NamedAPIResource,
                    },
                ],
                pokemon: [
                    {
                        is_hidden: Boolean,
                        slot: Number,
                        pokemon: NamedAPIResource,
                    },
                ],
            },
            {
                collection: name,
            }
        )
    );
