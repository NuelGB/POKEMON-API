const express = require('express');

const controller = require('./controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/template', route);
  //Name of the API (preferably)


  // POST endpoint /template/ that calls controller.post
  route.post('/', controller.post);

};
