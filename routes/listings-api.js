/*
 * All routes for Listing Data are defined here
 * Since this file is loaded in server.js into api/listings,
 *   these routes are mounted onto /api/listings
 */

const express = require('express');
const router  = express.Router();
const listingQueries = require('../db/queries/listings');

// Display all listings as JSON
router.get('/', (req, res) => {
  listingQueries.getListings()
    .then(listings => {
      res.json({ listings });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Display a specific user's listings as JSON
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  listingQueries.getUserListings(userId)
    .then(listings => {
      res.json({ listings });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Display specific listing as JSON
router.get('/:id', (req, res) => {
  const carId = req.params.id;
  listingQueries.getListing(carId)
    .then(listings => {
      res.json({ listings });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
