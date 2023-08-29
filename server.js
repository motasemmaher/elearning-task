const routes = require('./src/routes');
const express = require('express');
var bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: false }))
app.use('/api/v1', routes);


app.listen(4000, () => {
    console.log('Server Started');
})
