const express = require('express');
const router = express.Router();

// All listings
router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  console.log('response', res);
  const templateVars = { display: 'All', userId };

  res.render('search', templateVars);

});

router.post('/', (req, res) => {
  const searchOptions = req.body;
  console.log(searchOptions);

});

module.exports = router;