const router = require('express').Router();

const services = require('../controller/contacts');

router.get('/', services.getAll);
router.get('/:id', services.getById)

module.exports = router;