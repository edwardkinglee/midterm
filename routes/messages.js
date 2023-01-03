const express = require('express');
const router = express.Router();

// Get messages (inbox)
router.get('/', (req, res) => {
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

  const templateVars = { userId };

  res.render('messages', templateVars);

});

// View specific message thread (based on car ID + messager ID)
router.get('/:carid/:buyerid', (req, res) => {
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

  const templateVars = { userId };

  res.render('messages-show', templateVars);
});

module.exports = router;
