const routes = require('./src/routes');
const express = require('express');
const bodyParser = require('body-parser')
const {mongoose} = require('./src/lib');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: false }))
app.use('/api/v1', routes);


app.listen(4000, async () => {
   try {
        console.log('Server Started');
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('DB is connected!');
   } catch(err) {
    console.log(err);
   }
})
