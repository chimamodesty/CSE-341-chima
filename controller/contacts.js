const mongodb = require('../db/connect')
var ObjectId = require('mongodb').ObjectId

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find({})
    result.toArray().then(lists => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(lists)
    })
}

const getById = async (req, res, next) => {
    const id = req.params.id

    const result = await mongodb.getDb().db().collection('contacts').findOne({'_id': new ObjectId(id)})
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(result)
    
}

const addContact = async (req, res, next) => {
    const {firstName, lastName, favoriteColor, birthday} = req.body
    
    const data = {
        firstName,
        lastName,
        favoriteColor,
        birthday
    }

    await mongodb.getDb().db().collection('contacts').insertOne(data)
        .then(result => {
            res.status(201).json({"message": "created successfully",
            "insertedId": result.insertedId})
        }).catch(err => res.status(400).send({"error": err.message}))
}


const updateContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id)
    await mongodb.getDb().db().collection('contacts').updateOne(
        {'_id': userId},
        {$set: {...req.body}} 
        )
        .then(result => 
            res.status(204).json(result))
        .catch(err => res.status(400).json({'error': err.message}))
}

const deleteContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id)

    await mongodb.getDb().db().collection('contacts').deleteOne({'_id': userId})
        .then(result => res.status(200).json(result))
}

module.exports = {
    getAll,
    getById,
    addContact,
    updateContact,
    deleteContact
}