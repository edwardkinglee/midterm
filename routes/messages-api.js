const express = require('express');
const router = express.Router();
const messagesQueries = require('../db/queries/messages');

// Display all messages for a specific buyer & car (to get threaded messages)
router.get('/car=:carid&buyer=:id', (req, res) => {
  const userId = Number(req.cookies.user_id);
  const requestedUserId = req.params.id;
  const carId = req.params.carid;

  // if (userId !== requestedUserId) {
  //   return res.redirect('/');
  // }

  messagesQueries.getMessages(requestedUserId, carId)
    .then(messages => {

      const listerId = Number(messages[0].lister_id);
      const buyerId = Number(requestedUserId);

      if (userId === buyerId || userId === listerId) {
        return res.json({ messages });
      } else {
        return res.status(500).json({ error: 'Unauthorized' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Display all of the users messages (for the inbox, limit to the latest message for each car/user, outgoing first, then incoming)
router.get('/user/:id', (req, res) => {
  const userId = req.cookies.user_id;
  const requestedUserId = req.params.id;

  if (userId !== requestedUserId) {
    return res.redirect('/');
  }

  messagesQueries.getMessages(userId)
    .then(messages => {
      res.json({ messages });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
