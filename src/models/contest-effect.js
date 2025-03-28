const { NamedAPIResource } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                appeal: Number,
                jam: Number,
                effect_entries: [
                    {
                        effect: String,
                        language: NamedAPIResource,
                    },
                ],
                flavor_text_entries: [
                    {
                        flavor_text: String,
                        language: NamedAPIResource,
                        version: NamedAPIResource,
                    },
                ],
            },
            {
                collection: name,
            }
        )
    );
