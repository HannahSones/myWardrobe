const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database.js')

//test db

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ', err))

const app = express();

app.get('/', (req, res) => {
    res.send('INDEX');
});

//item routes

app.use('/item', require('./routes/item'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));