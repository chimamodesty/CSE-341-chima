const routes = require('express').Router();

const myController = require('../controller');

// routes.use('/', myController.awesomeFunction);
routes.use('/', require('./swagger.js'))
routes.use('/contacts', require('./contacts'))


module.exports = routes;
