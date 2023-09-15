const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.json('Welcome Nelson');
});
module.exports = routes;
