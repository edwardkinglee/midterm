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

// Add new listing
const addNewListing = (user, listingObj) => {

  const { year, make, model, body, color, mileage, price, desc, photo} = listingObj;

  return db.query('INSERT INTO cars (lister_id, year, make, model, color, description, price, photo, body_type, kms) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;', [user, year, make, model, color, desc, price, photo, body, mileage])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = {
  getListings,
  getListing,
  getUserListings,
  getMostPopular,
  addNewListing
};
