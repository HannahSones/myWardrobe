const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database.js');

//test db
db.authenticate()
  .then(async () => {
    db.sync();
  })
  .catch((err) => console.log('Error: ', err));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//item routes

// query the database ...
app.use('/query', require('./routes/query'));

// update existing... 
app.use('/update', require('./routes/update'));

// upload new item 
app.use('/upload', require('./routes/upload'));

// create new x in database ... 
app.use('/create', require('./routes/create'));

app.get('/', function (req, res) {
  res.sendFile('views/test.html', { root: __dirname });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
