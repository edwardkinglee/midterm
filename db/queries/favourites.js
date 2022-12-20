const db = require('../connection');

// Get favourites where user_id = 3 for testing
const getFavourites = () => {
  return db.query('SELECT * FROM user_favs JOIN cars ON user_favs.car_id = cars.id WHERE user_id = 3;')
    .then(data => {
      return data.rows;
    });
};

// Get all favourite cars for a user
const getUserFavourites = (userId) => {
  return db.query('SELECT * FROM user_favs JOIN cars ON user_favs.car_id = cars.id WHERE user_id = $1;', [userId])
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getFavourites,
  getUserFavourites
};