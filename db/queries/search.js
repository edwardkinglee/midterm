const db = require('../connection');

// Get search where make is 'Lamborghini' for testing
const getSearch = () => {
  return db.query('SELECT * FROM cars WHERE make = $1;', ['Lamborghini'])
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getSearch
};