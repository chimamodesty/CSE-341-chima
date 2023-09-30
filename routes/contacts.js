const router = require('express').Router();

const services = require('../controller/contacts');

router.get('/', services.getAll);
router.get('/:id', services.getById)

router.post('/', services.addContact)
router.put('/:id', services.updateContact)
router.delete('/:id', services.deleteContact)

module.exports = router;