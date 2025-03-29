const {
    names,
    NamedAPIResource,
    descriptions,
} = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                accuracy: Number,
                effect_chance: Number,
                pp: Number,
                priority: Number,
                power: Number,
                contest_combos: {
                    normal: {
                        use_before: [NamedAPIResource],
                        use_after: [NamedAPIResource],
                    },
                    super: {
                        use_before: [NamedAPIResource],
                        use_after: [NamedAPIResource],
                    },
                },
                contest_type: NamedAPIResource,
                contest_effect: { id: Number },
                damage_class: NamedAPIResource,
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
                learned_by_pokemon: [NamedAPIResource],
                flavor_text_entries: [
                    {
                        flavor_text: String,
                        language: NamedAPIResource,
                        version_group: NamedAPIResource,
                    },
                ],
                generation: NamedAPIResource,
                machines: [
                    {
                        machine: { id: Number },
                        version_group: NamedAPIResource,
                    },
                ],
                meta: {
                    ailment: NamedAPIResource,
                    category: NamedAPIResource,
                    min_hits: Number,
                    max_hits: Number,
                    min_turns: Number,
                    max_turns: Number,
                    drain: Number,
                    healing: Number,
                    crit_rate: Number,
                    ailment_chance: Number,
                    flinch_chance: Number,
                    stat_chance: Number,
                },
                names,
                past_values: [
                    {
                        accuracy: Number,
                        effect_chance: Number,
                        power: Number,
                        pp: Number,
                        effect_entries: [
                            {
                                effect: String,
                                short_effect: String,
                                language: NamedAPIResource,
                            },
                        ],
                        type: NamedAPIResource,
                        version_group: NamedAPIResource,
                    },
                ],
                stat_changes: [
                    {
                        change: Number,
                        stat: NamedAPIResource,
                    },
                ],
                super_contest_effect: { id: Number },
                target: NamedAPIResource,
                type: NamedAPIResource,
            },
            {
                collection: name,
            }
        )
    );
