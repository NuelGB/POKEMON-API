const { NamedAPIResource , names } = require('../utils/common-models'); 

const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                id : Number,
                name : String,
                items : [NamedAPIResource],
                names,
                pocket : NamedAPIResource,
            },
            {
                collection: name,
            }
        )
    );
