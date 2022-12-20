const db = require('../connection');

// Get all car listings
const getListings = () => {
  return db.query('SELECT * FROM cars;')
    .then(data => {
      return data.rows;
    });
};

// Get specific car listing
const getListing = (carId) => {
  return db.query('SELECT * FROM cars WHERE id = $1;', [carId])
    .then(data => {
      return data.rows;
    });
};

// Get all cars for a user
const getUserListings = (userId) => {
  return db.query('SELECT * FROM cars WHERE lister_id = $1;', [userId])
    .then(data => {
      return data.rows;
    });
};

// Get top 3 favourited (not sold/not deleted) cars
const getMostPopular = () => {
  return db.query('SELECT * FROM cars WHERE id IN (SELECT cars.id FROM cars JOIN user_favs ON user_favs.car_id = cars.id WHERE cars.sold = FALSE AND cars.is_deleted = FALSE GROUP BY cars.id ORDER BY COUNT(*) DESC FETCH FIRST 3 ROWS ONLY);')
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getListings,
  getListing,
  getUserListings,
  getMostPopular
};
