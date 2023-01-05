const db = require('../connection');

// Get all car listings
const getListings = () => {
  return db.query('SELECT * FROM cars ORDER BY is_deleted, sold, timestamp DESC;')
    .then(data => {
      return data.rows;
    });
};

// Get specific car listing
const getListing = (carId) => {
  //return db.query('SELECT * FROM cars WHERE id = $1;', [carId])
  return db.query('SELECT * FROM cars LEFT JOIN car_details ON cars.id = car_id WHERE cars.id = $1;', [carId])
    .then(data => {
      return data.rows[0];
    });
};

// Get all cars for a user
const getUserListings = (userId) => {

  return db.query('SELECT * FROM cars WHERE lister_id = $1 ORDER BY is_deleted, sold, timestamp DESC;', [userId])
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

  const { year, make, model, body, color, mileage, price, desc, photo0,
    interior, consumption, engine, fuel, transmission, details,
    photo1, photo2, photo3, photo4, photo5, photo6, photo7
  } = listingObj;

  return db.query('INSERT INTO cars (lister_id, year, make, model, color, description, price, photo, body_type, kms) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;', [user, year, make, model, color, desc, price, photo0, body, mileage])
    .then(data => {
      db.query('INSERT INTO car_details (car_id, interior_color, fuel_consumption, engine, fuel_type, transmission, details, photo1, photo2, photo3, photo4, photo5, photo6, photo7) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);', [data.rows[0].id, interior, consumption, engine, fuel, transmission, details, photo1, photo2, photo3, photo4, photo5, photo6, photo7]);
      return data.rows[0];
    });
};

// Mark as sold
const markAsSold = (carId) => {
  return db.query('UPDATE cars SET sold = TRUE WHERE id = $1 RETURNING *;', [carId])
    .then((data) => {
      return data.rows;
    });
};

// Mark as available/not sold
const markAsUnsold = (carId) => {
  return db.query('UPDATE cars SET sold = FALSE WHERE id = $1 RETURNING *;', [carId])
    .then((data) => {
      return data.rows;
    });
};

// Mark as deleted
const markAsDeleted = (carId) => {
  return db.query('UPDATE cars SET is_deleted = TRUE WHERE id = $1 RETURNING *;', [carId])
    .then((data) => {
      return data.rows;
    });
};

// Mark as active/undelete
const markAsUndeleted = (carId) => {
  return db.query('UPDATE cars SET is_deleted = FALSE WHERE id = $1 RETURNING *;', [carId])
    .then((data) => {
      return data.rows;
    });
};

module.exports = {
  getListings,
  getListing,
  getUserListings,
  getMostPopular,
  addNewListing,
  markAsSold,
  markAsUnsold,
  markAsDeleted,
  markAsUndeleted
};
