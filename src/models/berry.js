const { NamedAPIResource } = require('../utils/common-models');

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id: Number,
                name: String,
                growth_time: Number,
                max_harvest: Number,
                natural_gift_power: Number,
                size: Number,
                smoothness: Number,
                soil_dryness: Number,
                firmness: NamedAPIResource,
                flavors: [
                    {
                        potency: Number,
                        flavor: NamedAPIResource,
                    },
                ],
                item: NamedAPIResource,
                natural_gift_type: NamedAPIResource,
            },
            {
                collection: name,
            }
        )
    );
