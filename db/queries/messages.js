const db = require('../connection');

// Get messages by owner ID with optional second param: Object {car, messagerId}
// If called with just userId, will return all messages belonging to the user (as userId or ownerId)
// If called with the second param, will return all messages belonging to the requested car & messagerId
const getMessages = (userId, carId) => {
  if (!carId) { // if no second param, return all message threads (latest message in thread)
    return db.query('(WITH filtered_with_row AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY car_id ORDER BY timestamp DESC) AS row_number FROM (SELECT * FROM messages WHERE buyer_id = $1) as user_messages) SELECT filtered_with_row.*, cars.*, lister.username as lister_username, buyer.username as buyer_username FROM filtered_with_row JOIN cars ON filtered_with_row.car_id = cars.id JOIN users as lister ON filtered_with_row.lister_id = lister.id JOIN users as buyer ON filtered_with_row.buyer_id = buyer.id WHERE row_number = 1) UNION ALL (WITH filtered_with_row AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY car_id ORDER BY timestamp DESC) AS row_number FROM (SELECT * FROM messages WHERE lister_id = $1) as user_messages) SELECT filtered_with_row.*, cars.*, lister.username as lister_username, buyer.username as buyer_username FROM filtered_with_row JOIN cars ON filtered_with_row.car_id = cars.id JOIN users as lister ON filtered_with_row.lister_id = lister.id JOIN users as buyer ON filtered_with_row.buyer_id = buyer.id WHERE row_number = 1)', [userId])
      .then(data => {
        return data.rows;
      });
  } else {
    return db.query('SELECT messages.id as id, messages.car_id as car_id, messages.lister_id as lister_id, messages.buyer_id as buyer_id, messages.timestamp as timestamp, messages.message as message, messages.reply as reply, cars.id as car_id, cars.year, cars.make, cars.model, cars.color, cars.description, cars.price, cars.photo, cars.sold, cars.timestamp as car_timestamp, cars.is_deleted, cars.body_type, cars.kms, buyer.username as buyer_username, lister.username as lister_username FROM messages JOIN cars ON messages.car_id = cars.id JOIN users as lister ON lister.id = messages.lister_id JOIN users as buyer ON buyer.id = messages.buyer_id WHERE car_id = $2 AND buyer_id = $1 ORDER BY messages.timestamp ASC', [userId, carId])
      .then(data => {
        return data.rows;
      });
  }

};

// Add message to DB
const addMessage = (userId, carId, listerId, buyerId, message) => {

  let reply;

  if (userId === listerId) {
    reply = true;
  } else {
    reply = false;
  }

  return db.query('INSERT INTO messages (car_id, lister_id, buyer_id, timestamp, message, reply) VALUES ($1, $2, $3, NOW(), $4, $5) RETURNING *;', [carId, listerId, buyerId, message, reply])
    .then(data => {
      return data.rows[0];
    });

};

module.exports = {
  getMessages,
  addMessage
};
