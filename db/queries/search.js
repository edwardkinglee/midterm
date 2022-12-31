const db = require('../connection');

// Get search where make is 'Lamborghini' for testing
const getSearch = (searchOptions) => {
  console.log('searchOptions',searchOptions);
  const make = searchOptions.make;
  const model = searchOptions.model;
  const minYear = searchOptions.min_year;
  const maxYear = searchOptions.max_year;
  const bodyType = searchOptions.body_type;
  const minPrice = searchOptions.min_price;
  const maxPrice = searchOptions.max_price;
  const minKms = searchOptions.min_kms;
  const maxKms = searchOptions.max_kms;
  const sort = searchOptions.sort;
  let searchQuery = 'SELECT * FROM cars ';
  let queryParams = [];
  
  //add 'WHERE' only if these values are not ''
  if (make || model || minYear || maxYear || bodyType || minPrice || maxPrice || minKms || maxKms) {
    searchQuery += `WHERE`;
  }

  //loop to add 'AND' only if there is more then 1 parameters
  for (const key in searchOptions) {
    if (queryParams.length > 0 && searchOptions[key] && key !== 'sort') {
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

    if (key === 'min_price' && minPrice) {
      queryParams.push(`${minPrice}`);
      searchQuery += ` price >= $${queryParams.length} `;
    }

    if (key === 'max_price' && maxPrice) {
      queryParams.push(`${maxPrice}`);
      searchQuery += ` price <= $${queryParams.length} `;
    }

    if (key === 'min_kms' && minKms) {
      queryParams.push(`${minKms}`);
      searchQuery += ` kms >= $${queryParams.length} `;
    }

    if (key === 'max_kms' && maxKms) {
      queryParams.push(`${maxKms}`);
      searchQuery += ` kms <= $${queryParams.length} `;
    }

    if (key === 'body_type' && bodyType) {
      queryParams.push(`${bodyType}`);
      searchQuery += ` body_type = $${queryParams.length} `;
    }

  }
  
  if (sort) {
    if (sort === 'low-price') {
      searchQuery += 'ORDER BY price;';
    }
  
    if (sort === 'high-price') {
      searchQuery += 'ORDER BY price DESC;';
    }
  
    if (sort === 'newest-year') {
      searchQuery += 'ORDER BY year DESC;';
    }
  
    if (sort === 'oldest-year') {
      searchQuery += 'ORDER BY year;';
    }

    if (sort === 'make-desc') {
      searchQuery += 'ORDER BY make DESC;';
    }
  } else {
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