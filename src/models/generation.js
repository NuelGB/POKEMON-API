const { NamedAPIResource, names } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                abilities: [NamedAPIResource],
                names,
                main_region: NamedAPIResource,
                moves: [NamedAPIResource],
                pokemon_species: [NamedAPIResource],
                types: [NamedAPIResource],
                version_groups: [NamedAPIResource],
            },
            {
                collection: name,
            }
        )
    );
