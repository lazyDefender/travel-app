const userErrors = require('./users/userErrors');
const cityErrors = require('./cities/cityErrors');
const authErrors = require('./auth/authErrors');

const errors = {
    USERS: userErrors,
    CITIES: cityErrors,
    AUTH: authErrors,
};

module.exports = errors;