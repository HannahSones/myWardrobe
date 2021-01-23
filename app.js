const express = require('express');
const exphbs = require('express-handlebars');

const db = require('./config/database.js');
const app = express();

//test db

// set up middleware
app.use(express.static('public/'));

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials',
  })
);

app.set('view engine', 'handlebars');

//item routes

// query the database ...
app.use('/query', require('./routes/query'));

// update existing...
app.use('/update', require('./routes/update'));

// upload new item
app.use('/upload', require('./routes/upload'));

// create new x in database ...
app.use('/create', require('./routes/create'));

// drop items from the database ...
app.use('/delete', require('./routes/delete'));

// we set the handlebars main.handlebars in the server file as the body of the html.
// use res.render for handlebars

app.use('/', require('./routes/views'));

const PORT = process.env.PORT || 5000;
db.authenticate()
  .then(async () => {
    db.sync();
  })
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log('Error: ', err));
