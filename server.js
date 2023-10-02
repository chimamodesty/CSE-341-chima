var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


var mongodb = require('./db/connect')

var port = process.env.port || 8080


app
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(bodyParser.json())
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        next()
    })
    .use('/', require('./routes'))

mongodb.initDB((err, mongodb) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(port)
        console.log(`DB connected and server is running on port ${port}`);
        
    }

})

