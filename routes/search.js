const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();

// All listings
router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  const searchQuery = req.query;
  console.log('search query',searchQuery); 
  const templateVars = { display: 'All', userId, searchQuery};
  
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