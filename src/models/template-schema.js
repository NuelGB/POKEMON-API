module.exports = (db) =>
    db.model(
      'template',
      db.Schema({
        attribute1: String,
        attribute2: Number
      })
    );
  