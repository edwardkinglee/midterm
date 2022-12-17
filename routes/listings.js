const express = require('express');
const router = express.Router();

// All listings
router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  console.log(userId);
  if (!userId) {
    userId = 0;
  }

  const templateVars = { display: 'All', userId };

  res.render('listings', templateVars);


});

// View my listings page
router.get('/mine', (req, res) => {
  const userId = req.cookies.user_id;
  if (!userId) {
    userId = 0;
  }

  // query the carId, get the info needed for the car listing page, add to templateVars
  const templateVars = { display: 'My', userId };

  res.render('listings', templateVars);
});

// Post new car
router.get('/new', (req, res) => {
  res.render('listing-new');
});

// View single listing page
router.get('/:id', (req, res) => {
  const carId = req.params.id;

  // query the carId, get the info needed for the car listing page, add to templateVars
  const templateVars = {};

  res.render('listing-show', templateVars);
});

module.exports = router;
