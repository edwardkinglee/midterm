const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  // get all listings, add to templateVars (can further filter on the page for 'My listings'?)
  const templateVars = {};

  res.render('listings', templateVars);


});

router.get('/:id', (req, res) => {
  const carId = req.params.id;

  // query the carId, get the info needed for the car listing page, add to templateVars
  const templateVars = {};

  res.render('listing-show', templateVars);
});

router.get('/new', (req, res) => {
  res.render('listing-new');
});

module.exports = router;
