const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.json('Aweson person');
});
module.exports = routes;
