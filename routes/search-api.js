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
  const makeQuery = searchParams.get('make');
  const modelQuery = searchParams.get('model');
  const minYearQuery = searchParams.get('min_year');
  const maxYearQuery = searchParams.get('max_year');
  const bodyTypeQuery = searchParams.get('body_type');

  const searchOptions = {make : makeQuery,
    model: modelQuery,
    min_year: minYearQuery,
    max_year: maxYearQuery,
    body_type: bodyTypeQuery
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