const routes = require('express').Router();

const myController = require('../controller');

routes.get('/', myController.awesomeFunction);
module.exports = routes;
