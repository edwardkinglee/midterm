const express = require('express');
const router = express.Router();

// All listings
router.get('/', (req, res) => {
  const userId = req.cookies.user_id;

  const templateVars = { display: 'All', userId };

  res.render('listings', templateVars);

});

// View my listings page
router.get('/mine', (req, res) => {
  const userId = req.cookies.user_id;

  if (!userId) {
    const errorVars = {
      status: 401,
      message: 'Unauthorized.',
      cta: {
        url: '/login/3',
        display: 'Click here to login as user 3.'
      }
    };

    res.render('error_template', errorVars);
  }

  // query the carId, get the info needed for the car listing page, add to templateVars
  const templateVars = { display: 'My', userId };

  res.render('listings', templateVars);
});

// Post new car
router.get('/new', (req, res) => {
  const userId = req.cookies.user_id;

  if (!userId) {
    return res.redirect('/login');
  }

  const templateVars = { userId };

  res.render('listing-new', templateVars);
});

// View single listing page
router.get('/:id', (req, res) => {
  const carId = req.params.id;

  // query the carId, get the info needed for the car listing page, add to templateVars
  const templateVars = {};

  res.render('listing-show', templateVars);
});

module.exports = router;
