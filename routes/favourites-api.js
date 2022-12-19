/*
 * All routes for Favourites Data are defined here
 * Since this file is loaded in server.js into api/favourites,
 *   these routes are mounted onto /api/favourites
 */

const express = require('express');
const router  = express.Router();
const favoriteQueries = require('../db/queries/favourites');

// Display all listings as JSON
router.get('/', (req, res) => {
  favoriteQueries.getFavourites()
    .then(favourites => {
      res.json({ favourites });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Display specific listing as JSON
router.get('/user/:id', (req, res) => {
  const carId = req.params.id;
  favoriteQueries.getFavourites(carId)
    .then(Favourites => {
      res.json({ Favourites });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;