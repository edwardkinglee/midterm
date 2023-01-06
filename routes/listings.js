const express = require('express');
const router = express.Router();
const listingQueries = require('../db/queries/listings');

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

router.post('/new', (req, res) => {
  const userId = req.cookies.user_id;
  const values = req.body;

  listingQueries.addNewListing(userId, values)
    .then((response) => {
      res.send(response);
    })
    .catch(console.log);
});

//send listing to phone
router.get('/phone', (req, res) => {
  const userId = req.cookies.user_id;
  const url = req.headers.referer;
  //gets the number from the URL
  const listingNum = url.split('/').pop();
  
  listingQueries.getListing(listingNum)
  .then((response) => {
    const year = response.year;
    const make = response.make;
    const model = response.model;
    const price = Number(response.price).toLocaleString('en');
    const templateVars = { userId, url, year, make, model, price};
    res.render('phone',templateVars);
  })
  .catch(console.log);

});

//send listing to email
router.get('/email', (req, res) => {
  const userId = req.cookies.user_id;
  const url = req.headers.referer;
  //gets the number from the URL
  const listingNum = url.split('/').pop();
  
  listingQueries.getListing(listingNum)
  .then((response) => {
    const year = response.year;
    const make = response.make;
    const model = response.model;
    const price = Number(response.price).toLocaleString('en');
    const templateVars = { userId, url, year, make, model, price};
    res.render('email',templateVars);
  })
  .catch(console.log);

});

// View single listing page
router.get('/:id', (req, res) => {
  const userId = req.cookies.user_id;
  const carId = req.params.id;

  // query the carId, get the info needed for the car listing page, add to templateVars
  const templateVars = {userId, carId};

  res.render('listing-show', templateVars);
});

// Update listing
router.put('/:id', (req, res) => {
  const userId = req.cookies.user_id;
  const carId = req.params.id;
  const values = req.body;

  if (values.sold === 'true') {
    listingQueries.markAsSold(carId)
      .then((response) => {
        return res.send(response);
      })
      .catch(console.log);
  }

  if (values.sold === 'false') {
    listingQueries.markAsUnsold(carId)
      .then((response) => {
        return res.send(response);
      })
      .catch(console.log);
  }

  if (values.delete === 'true') {
    listingQueries.markAsDeleted(carId)
      .then((response) => {
        return res.send(response);
      })
      .catch(console.log);
  }

  if (values.delete === 'false') {
    listingQueries.markAsUndeleted(carId)
      .then((response) => {
        return res.send(response);
      })
      .catch(console.log);
  }

});

module.exports = router;
