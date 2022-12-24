const db = require('../connection');

// Get search where make is 'Lamborghini' for testing
const getSearch = (searchOptions) => {
  console.log('searchOptions',searchOptions);
  const make = searchOptions.make;
  const model = searchOptions.model;
  const minYear = searchOptions.min_year;
  const maxYear = searchOptions.max_year;
  const bodyType = searchOptions.body_type;

  let searchQuery = 'SELECT * FROM cars ';
  let queryParams = [];
  
  const searchValues = Object.values(searchOptions);
  //check if search values are empty ''
  const valuesEmpty = searchValues.every(value => value === '');
  if (valuesEmpty) {
    searchQuery += 'ORDER BY make;';
  }

  //add 'WHERE' only if these values are not ''
  if (make || model || minYear || maxYear || bodyType) {
    searchQuery += `WHERE`;
  }

  //loop to add 'AND' only if there is more then 1 parameters
  for (const key in searchOptions) {
    if (queryParams.length > 0 && searchOptions[key]) {
      searchQuery += `AND`;
    }

    if (key === 'make' && make) {
      queryParams.push(`${make}`);
      searchQuery += ` make = $${queryParams.length} `;
    }

    if (key === 'model' && model) {
      queryParams.push(`${model}`);
      searchQuery += ` model = $${queryParams.length} `;
    }

    if (key === 'min_year' && minYear) {
      queryParams.push(`${minYear}`);
      searchQuery += ` year >= $${queryParams.length} `;
    }

    if (key === 'max_year' && maxYear) {
      queryParams.push(`${maxYear}`);
      searchQuery += ` year <= $${queryParams.length} `;
    }

    if (key === 'body_type' && bodyType) {
      queryParams.push(`${bodyType}`);
      searchQuery += ` body_type = $${queryParams.length} `;
    }

  }

  if (queryParams.length > 0) {
    searchQuery += 'ORDER BY make;';
  }
  console.log(searchQuery);
  console.log('queryparams', queryParams);
  return db.query(searchQuery, queryParams)
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getSearch
};