const express = require('express');
const router = express.Router();

// Get favourites
router.get('/', (req, res) => {
  const userId = req.cookies.user_id;

  const templateVars = { display: 'All', userId };

  res.render('favourites', templateVars);

});

// View my favourites page
router.get('/mine', (req, res) => {
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

module.exports = router;