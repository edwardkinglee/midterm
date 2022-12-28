const express = require('express');
const router  = express.Router();
const searchQuery = require('../db/queries/search');


router.get('/', (req, res) => {
  /*get full url for example http://localhost:8080/search?make=Ford&model=&min_year=&max_year=&submit=Search */

  const paramsString = req.headers.referer;
  const url = new URL(paramsString);
  //pass in url.search ?make=Ford&model=&min_year=&max_year=&submit=Search
  const searchParams = new URLSearchParams(url.search);
  //get search values
  console.log('searchParams', searchParams);

  const searchOptions = {
    make : searchParams.get('make'),
    model: searchParams.get('model'),
    min_year: searchParams.get('min_year'),
    max_year: searchParams.get('max_year'),
    body_type: searchParams.get('body_type'),
    min_price: searchParams.get('min_price'),
    max_price: searchParams.get('max_price')
  };

  //pass in searchOptions for query
  searchQuery.getSearch(searchOptions)
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