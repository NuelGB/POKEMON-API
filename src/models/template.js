const name = __filename.slice(__dirname.length + 1, -3);

module.exports = (db) =>
    db.model(
        name,
        db.Schema(
            {
                attribute1: String,
                attribute2: Number,
            },
            {
                collection: name,
            }
        )
    );
