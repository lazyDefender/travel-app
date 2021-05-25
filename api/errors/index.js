const userErrors = require('./users/userErrors');
const cityErrors = require('./cities/cityErrors');

const errors = {
    USERS: userErrors,
    CITIES: cityErrors,
};

module.exports = errors;