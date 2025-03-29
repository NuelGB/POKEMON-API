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
                is_battle_only: Boolean,
                affecting_moves: {
                    increase: [
                        {
                            change: Number,
                            move: NamedAPIResource,
                        },
                    ],
                    decrease: [
                        {
                            change: Number,
                            move: NamedAPIResource,
                        },
                    ],
                },
                affecting_natures: {
                    increase: [NamedAPIResource],
                    decrease: [NamedAPIResource],
                },
                characteristics: [
                    {
                        id: Number,
                    },
                ],
                move_damage_class: NamedAPIResource,
                names,
            },
            {
                collection: name,
            }
        )
    );
