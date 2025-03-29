const { NamedAPIResource, names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                order: Number,
                form_order: Number,
                is_default: Boolean,
                is_battle_only: Boolean,
                is_mega: Boolean,
                form_name: String,
                pokemon: NamedAPIResource,
                types: [
                    {
                        slot: Number,
                        type: NamedAPIResource,
                    },
                ],
                sprites: {
                    front_default: String,
                    front_shiny: String,
                    back_default: String,
                    back_shiny: String,
                },
                version_group: NamedAPIResource,
                names,
                form_names: names,
            },
            {
                collection: name,
            }
        )
    );
