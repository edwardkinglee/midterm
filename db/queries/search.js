const db = require('../connection');

// Get search where make is 'Lamborghini' for testing
const getSearch = (searchOptions) => {
  
  return db.query('SELECT * FROM cars;')
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getSearch
};