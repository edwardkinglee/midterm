const db = require('../connection');

// Get messages by owner ID with optional second param: Object {car, messagerId}
// If called with just userId, will return all messages belonging to the user (as userId or ownerId)
// If called with the second param, will return all messages belonging to the requested car & messagerId
const getMessages = (userId, carId) => {
  if (!carId) { // if no second param, return all message threads (latest message in thread)
    return db.query('(WITH filtered_with_row AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY car_id ORDER BY timestamp DESC) AS row_number FROM (SELECT * FROM messages WHERE buyer_id = $1) as user_messages) SELECT * FROM filtered_with_row JOIN cars ON filtered_with_row.car_id = cars.id WHERE row_number = 1) UNION ALL (WITH filtered_with_row AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY buyer_id ORDER BY timestamp DESC) AS row_number FROM (SELECT * FROM messages WHERE lister_id = $1) as user_messages) SELECT * FROM filtered_with_row JOIN cars ON filtered_with_row.car_id = cars.id WHERE row_number = 1)', [userId])
      .then(data => {
        return data.rows;
      });
  } else {
    return db.query('SELECT * FROM messages JOIN cars ON messages.car_id = cars.id WHERE car_id = $2 AND buyer_id = $1 ORDER BY messages.timestamp ASC', [userId, carId])
      .then(data => {
        return data.rows;
      });
  }

};

module.exports = {
  getMessages
};
