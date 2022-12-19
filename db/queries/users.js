const db = require('../connection');

// Get user from database by ID
const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getUserByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1;', [email])
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getUserByName = (username) => {
  return db.query('SELECT * FROM users WHERE email = $1;', [username])
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Add user to database
const addUser = (userObj) => {
  const userEmail = userObj.email;
  const userName = userObj.username;
  const userPassword = userObj.password;

  return db.query('INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *;', [userEmail, userName, userPassword])
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });

};

module.exports = {
  getUserById,
  getUserByEmail,
  getUserByName,
  addUser
};
