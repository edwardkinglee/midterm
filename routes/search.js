const express = require('express');
const router = express.Router();

// All listings
router.get('/', (req, res) => {
  const userId = req.cookies.user_id;

  const templateVars = { display: 'All', userId };

  res.render('search', templateVars);

});

module.exports = router;