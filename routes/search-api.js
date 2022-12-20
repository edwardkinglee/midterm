const express = require('express');
const router  = express.Router();
const listingQueries = require('../db/queries/search');

// Display all listings as JSON
router.get('/', (req, res) => {
  listingQueries.getListings()
    .then(search => {
      res.json({ search });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;