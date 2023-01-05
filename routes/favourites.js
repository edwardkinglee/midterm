const express = require('express');
const router = express.Router();
const favoriteQueries = require('../db/queries/favourites');

// View favourites
router.get('/', (req, res) => {
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

  res.render('favourites', templateVars);
});

// Add to favourites
router.post('/', (req, res) => {
  const values = req.body;

  const userId = values.user;
  const carId = values.car;

  favoriteQueries.addUserFavorite(carId, userId)
    .then((response) => {
      return res.send(response);
    })
    .catch(console.log);

});

// Delete from favourites
router.delete('/', (req, res) => {
  const values = req.body;

  const userId = values.user;
  const carId = values.car;

  favoriteQueries.removeUserFavorite(carId, userId)
    .then((response) => {
      return res.send(response);
    })
    .catch(console.log);

});

module.exports = router;
