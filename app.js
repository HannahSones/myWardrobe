const express = require('express');
const exphbs = require('express-handlebars');

const db = require('./config/database.js');
const app = express();

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

// user actions ...
app.use('/user', require('./routes/userRoute'));

// outfit actions ...
app.use('/outfit', require('./routes/outfitRoute'));

// planner actions ...
app.use('/planner', require('./routes/plannerRoute'));

// category actions ...
app.use('/category', require('./routes/categoryRoute'));

// item actions ...
app.use('/item', require('./routes/itemRoute'));

// we set the handlebars main.handlebars in the server file as the body of the html.
// use res.render for handlebars
app.use('/', require('./routes/htmlRoutes'));

const PORT = process.env.PORT || 5000;
db.authenticate()
  .then(async () => {
    db.sync();
  })
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log('Error: ', err));
