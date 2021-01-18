const express = require('express');
const exphbs = require('express-handlebars');


const db = require('./config/database.js');
const app = express();

//test db
db.authenticate()
  .then(async () => {
    db.sync();
  })
  .catch((err) => console.log('Error: ', err));

// set up middleware
app.use(express.static('public/'));

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine('handlebars', exphbs({ 
  defaultLayout: 'main' 
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

// we set the handlebars main.handlebars in the server file as the body of the html. 
// use res.render for handlebars 
app.get('/', function (req, res) {
  res.render('index', {wardrobe: res});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
