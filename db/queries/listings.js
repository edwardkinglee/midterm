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

const getMostPopular = () => {
  return db.query('SELECT * FROM cars WHERE id IN (SELECT cars.id FROM cars JOIN user_favs ON user_favs.car_id = cars.id WHERE cars.sold = FALSE AND cars.is_deleted = FALSE GROUP BY cars.id ORDER BY COUNT(*) DESC FETCH FIRST 3 ROWS ONLY);')
   .then(data => {
      return data.rows;
    });
}

module.exports = {
  getListings,
  getListing,
  getUserListings,
  getMostPopular
};