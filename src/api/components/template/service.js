const repository = require('./repository');

//example function to create a document and input it to the database
//Serves as a higher level accessible command list to be called by controller
async function create(bodyObject) {
  return repository.create(bodyObject);
}

module.exports = {
  create
};
