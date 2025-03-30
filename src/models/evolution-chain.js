const { NamedAPIResource, names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

const chainLink = {
    is_baby: Boolean,
    species: NamedAPIResource,
    evolution_details: [
        {
            item: NamedAPIResource,
            trigger: NamedAPIResource,
            gender: Number,
            held_item: NamedAPIResource,
            known_move: NamedAPIResource,
            known_move_type: NamedAPIResource,
            location: NamedAPIResource,
            min_level: Number,
            min_happiness: Number,
            min_beauty: Number,
            min_affection: Number,
            needs_overworld_rain: Boolean,
            party_species: NamedAPIResource,
            party_type: NamedAPIResource,
            relative_physical_stats: Number,
            time_of_day: String,
            trade_species: NamedAPIResource,
            turn_upside_down: Boolean,
        },
    ],
    evolves_to: [
        {
            is_baby: Boolean,
            species: NamedAPIResource,
            evolution_details: [
                {
                    item: NamedAPIResource,
                    trigger: NamedAPIResource,
                    gender: Number,
                    held_item: NamedAPIResource,
                    known_move: NamedAPIResource,
                    known_move_type: NamedAPIResource,
                    location: NamedAPIResource,
                    min_level: Number,
                    min_happiness: Number,
                    min_beauty: Number,
                    min_affection: Number,
                    needs_overworld_rain: Boolean,
                    party_species: NamedAPIResource,
                    party_type: NamedAPIResource,
                    relative_physical_stats: Number,
                    time_of_day: String,
                    trade_species: NamedAPIResource,
                    turn_upside_down: Boolean,
                },
            ],
            evolves_to: [
                {
                    is_baby: Boolean,
                    species: NamedAPIResource,
                    evolution_details: [
                        {
                            item: NamedAPIResource,
                            trigger: NamedAPIResource,
                            gender: Number,
                            held_item: NamedAPIResource,
                            known_move: NamedAPIResource,
                            known_move_type: NamedAPIResource,
                            location: NamedAPIResource,
                            min_level: Number,
                            min_happiness: Number,
                            min_beauty: Number,
                            min_affection: Number,
                            needs_overworld_rain: Boolean,
                            party_species: NamedAPIResource,
                            party_type: NamedAPIResource,
                            relative_physical_stats: Number,
                            time_of_day: String,
                            trade_species: NamedAPIResource,
                            turn_upside_down: Boolean,
                        },
                    ],
                    evolves_to: [
                        {
                            is_baby: Boolean,
                            species: NamedAPIResource,
                            evolution_details: [
                                {
                                    item: NamedAPIResource,
                                    trigger: NamedAPIResource,
                                    gender: Number,
                                    held_item: NamedAPIResource,
                                    known_move: NamedAPIResource,
                                    known_move_type: NamedAPIResource,
                                    location: NamedAPIResource,
                                    min_level: Number,
                                    min_happiness: Number,
                                    min_beauty: Number,
                                    min_affection: Number,
                                    needs_overworld_rain: Boolean,
                                    party_species: NamedAPIResource,
                                    party_type: NamedAPIResource,
                                    relative_physical_stats: Number,
                                    time_of_day: String,
                                    trade_species: NamedAPIResource,
                                    turn_upside_down: Boolean,
                                },
                            ],
                            evolves_to: [],
                        },
                    ],
                },
            ],
        },
    ],
};

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                baby_trigger_item: NamedAPIResource,
                chain: chainLink,
            },
            {
                collection: name,
            }
        )
    );
