const { NamedAPIResource } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                berry_flavor: NamedAPIResource,
                names: [
                    {
                        name: String,
                        color: String,
                        language: NamedAPIResource,
                    },
                ],
            },
            {
                collection: name,
            }
        )
    );
