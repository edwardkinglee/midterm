const db = require('../connection');

const getListings = () => {
  return db.query('SELECT * FROM cars;')
    .then(data => {
      return data.rows;
    });
};

const getListing = (carId) => {
  return db.query('SELECT * FROM cars WHERE id = $1;', [carId])
    .then(data => {
      return data.rows;
    });
};

const getUserListings = (userId) => {
  return db.query('SELECT * FROM cars WHERE lister_id = $1;', [userId])
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getListings,
  getListing,
  getUserListings
};
