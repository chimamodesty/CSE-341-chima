var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var mongodb = require('./db/connect')

var port = process.env.port || 8080

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        next()
    })
    .use('/', require('./routes'))
    .use('/contacts', require('./routes/contacts'))

mongodb.initDB((err, mongodb) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(port)
        console.log(`DB connected and server is running on port ${port}`);
        
    }

})

