// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
const listingApiRoutes = require('./routes/listings-api');
const userApiRoutes = require('./routes/users-api');

const listingsRoutes = require('./routes/listings');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) start with `/api`
app.use('/api/listings', listingApiRoutes);
app.use('/api/users', userApiRoutes);

app.use('/listings', listingsRoutes);
app.use('/users', usersRoutes);

// Home page

app.get('/', (req, res) => {
  res.render('index');
});

// Login to a specific user
app.get('/login/:id', (req, res) => {
  const userId = req.params.id;
  console.log('creating cookie for user id', userId)
  res.cookie('user_id', userId);
  res.redirect('/');
});

// Logout & clear cookie
app.get('/logout', (req, res) => {
  const userId = req.params.id;
  console.log('clearing cookie for user id', userId)
  res.clearCookie('user_id');
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
