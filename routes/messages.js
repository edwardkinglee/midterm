const express = require('express');
const router = express.Router();
const messagesQueries = require('../db/queries/messages');

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
  const carId = req.params.carid;
  const buyerId = req.params.buyerid;

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

  const templateVars = { userId, carId, buyerId };

  res.render('messages-show', templateVars);
});

// Insert message to DB
router.post('/', (req, res) => {
  const userId = req.cookies.user_id;
  const values = req.body;
  const carId = values.carId;
  const listerId = values.listerId;
  const buyerId = values.buyerId;
  const message = values.message;
  console.log(values);

  messagesQueries.addMessage(userId, carId, listerId, buyerId, message)
    .then((response) => {
      res.send(response);
    })
    .catch(console.log);

});

module.exports = router;
