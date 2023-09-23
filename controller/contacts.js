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

module.exports = {
    getAll,
    getById
}