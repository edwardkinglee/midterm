const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();

// get search details
router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  const searchQuery = req.query;
  let make = req.query.make;
  let minYear = req.query.min_year;
  let maxYear = req.query.max_year;
  let minKms = req.query.min_kms;
  let maxKms = req.query.max_kms;
  let minPrice = req.query.min_price;
  let maxPrice = req.query.max_price;
  let sort = req.query.sort;
  let bodyType = req.query.body_type;

  if(!make){
     make = 'Any Make'; 
  }
  
  if(!minYear){
    minYear = 'Any';
 }

 if(!maxYear){
   maxYear = 'Any';
 }
  
  if(!minKms){
    minKms = 'Any kms';
  }

  if(minKms && !isNaN(minKms)){
    minKms= Number(minKms).toLocaleString('en');
  }
  
  if(!maxKms){
    maxKms = 'Any kms';
  }

  if(maxKms && !isNaN(maxKms)){
    maxKms= Number(maxKms).toLocaleString('en');
  }

  if(!minPrice){
    minPrice = '$0';
  }

  if(minPrice && !isNaN(minPrice)){
    minPrice = Number(minPrice).toLocaleString('en');
  }

  if(!maxPrice){
    maxPrice = 'Unlimited';
  }

  if(maxPrice && !isNaN(maxPrice)){
    maxPrice = Number(maxPrice).toLocaleString('en');
  }

  if(!sort){
    sort = 'By Make A-Z';
  }
  
  const searchOptions = {
    make,
    minYear,
    maxYear,
    minKms,
    maxKms,
    minPrice,
    maxPrice,
    sort,
    bodyType
 };

  const templateVars = { display: 'All', userId, searchOptions};
  
  res.render('search', templateVars);

});

// router.post('/', (req, res) => {
//   const userId = req.cookies.user_id;
//   const searchOptions = req.body;
//   const templateVars = { display: 'All', userId, searchOptions };
//   console.log('searchOptions templateVars', templateVars);
//   res.render('search', templateVars);
// });

module.exports = router;