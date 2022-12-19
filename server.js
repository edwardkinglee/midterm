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

// Authorization function

const authorizeUser = (req, res, next) => {
  const userId = req.cookies.user_id;

  if (userId === undefined) {
    const errorVars = {
      status: 401,
      message: 'Unauthorized.',
      cta: {
        url: '/login/3',
        display: 'Click here to login as user 3.'
      }
    };
    return res.render('error_template', errorVars);
  }

  next();
};

// Separated Routes for each Resource
const listingApiRoutes = require('./routes/listings-api');
const listingsRoutes = require('./routes/listings');
const favouritesApiRoutes = require('./routes/favourites-api');
const favouritesRoutes = require('./routes/favourites');
// >>>> will need additional ApiRoutes and Routes for messages and favourites

// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) start with `/api`
app.use('/api/listings', listingApiRoutes);
app.use('/listings', listingsRoutes);
app.use('/api/favourites', favouritesApiRoutes);
app.use('/favourites', favouritesRoutes);
// >>>> will need additional ApiRoutes and Routes for messages and favourites

// REGULAR ROUTES BEGIN HERE (home, login, register, logout, error page)

// Home page
app.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  const templateVars = { userId };
  res.render('index', templateVars);
});

// Registration
app.get('/register', (req, res) => {
  const userId = req.params.id;
  if (userId) {
    res.redirect('/');
  }

  res.render('register');
});

// Login page
app.get('/login', (req, res) => {
  const userId = req.params.id;
  if (userId) {
    res.redirect('/');
  }

  res.render('login');
});

// Login to a specific user
app.get('/login/:id', (req, res) => {
  const userId = req.params.id;
  res.cookie('user_id', userId);
  res.redirect('/');
});

// Logout & clear cookie
app.get('/logout', authorizeUser, (req, res) => {
  const userId = req.params.id;
  res.clearCookie('user_id');
  res.redirect('/');
});

// Error rendering for all non-existent routes/pages
app.get('/*', authorizeUser, (req, res) => {
  const userId = req.cookies.user_id;

  const errorVars = {
    status: 404,
    message: 'Page not found.',
    cta: {
      url: 'javascript:history.back()',
      display: 'Click here to go back.'
    },
    userId
  };

  res.render('error_template', errorVars);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
