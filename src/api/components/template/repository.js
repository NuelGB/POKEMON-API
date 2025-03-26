const { template } = require('../../../models');

async function getTemplate() {
  return template.find({});
}

async function create(body) {
  return template.create(body);
}

module.exports = {
  getTemplate,
  create,
};
