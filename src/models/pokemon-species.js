const {
    NamedAPIResource,
    names,
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
                order: Number,
                gender_rate: Number,
                capture_rate: Number,
                base_happiness: Number,
                is_baby: Boolean,
                is_legendary: Boolean,
                is_mythical: Boolean,
                hatch_counter: Number,
                has_gender_differences: Boolean,
                forms_switchable: Boolean,
                growth_rate: NamedAPIResource,
                pokedex_numbers: [
                    {
                        entry_number: Number,
                        pokedex: NamedAPIResource,
                    },
                ],
                egg_groups: [NamedAPIResource],
                color: NamedAPIResource,
                shape: NamedAPIResource,
                evolves_from_species: NamedAPIResource,
                evolution_chain: { id: Number },
                habitat: NamedAPIResource,
                generation: NamedAPIResource,
                names,
                pal_park_encounters: [
                    {
                        base_score: Number,
                        rate: Number,
                        area: NamedAPIResource,
                    },
                ],
                flavor_text_entries: [
                    {
                        flavor_text: String,
                        language: NamedAPIResource,
                        version: NamedAPIResource,
                    },
                ],
                form_descriptions: descriptions,
                genera: [
                    {
                        genus: String,
                        language: NamedAPIResource,
                    },
                ],
                varieties: [
                    {
                        is_default: Boolean,
                        pokemon: NamedAPIResource,
                    },
                ],
            },
            {
                collection: name,
            }
        )
    );
