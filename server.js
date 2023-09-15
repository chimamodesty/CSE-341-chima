var express = require('express');
var app = express();
app.use('/', require('./routes'));
const port = 3000;

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
