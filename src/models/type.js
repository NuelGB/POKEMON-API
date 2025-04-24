const { names, NamedAPIResource } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

const TypeRelations = {
    no_damage_to: [NamedAPIResource],
    half_damage_to: [NamedAPIResource],
    double_damage_to: [NamedAPIResource],
    no_damage_from: [NamedAPIResource],
    half_damage_from: [NamedAPIResource],
    double_damage_from: [NamedAPIResource],
};

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                damage_relations: TypeRelations,
                past_damage_relations: [
                    {
                        generation: NamedAPIResource,
                        damage_relations: TypeRelations,
                    },
                ],
                game_indices: [
                    {
                        game_index: Number,
                        generation: NamedAPIResource,
                    },
                ],
                generation: NamedAPIResource,
                move_damage_class: NamedAPIResource,
                names,
                pokemon: [
                    {
                        slot: Number,
                        pokemon: NamedAPIResource,
                    },
                ],
                moves: [NamedAPIResource],
            },
            {
                collection: name,
            }
        )
    );
