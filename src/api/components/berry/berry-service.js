const repository = require('./berry-repository');

// example function to create a document and input it to the database
// Serves as a higher level accessible command list to be called by controller
async function getItem(name) {
    if (/^-?\d+(\.\d+)?$/.test(name)) {
        return repository.getByID(name);
    }
    return repository.getByName(name);
}

module.exports = {
    getItem,
};
