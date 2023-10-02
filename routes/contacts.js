const router = require('express').Router();

const services = require('../controller/contacts');
/**
 * @swagger
 * tags:
 *  name: Contacts
 *  description: list all contacts
 * /contacts
 *  get:
 *      summary: List all the contacts in the database
 *      tags: [Contacts]
 *      responses:
 *          200:
 *              description: The list of all contacts
 */
router.get('/', services.getAll);
router.get('/:id', services.getById)

router.post('/', services.addContact)
router.put('/:id', services.updateContact)
router.delete('/:id', services.deleteContact)

module.exports = router;