const userErrors = require('./users/userErrors');
const cityErrors = require('./cities/cityErrors');
const authErrors = require('./auth/authErrors');
const hotelErrors = require('./hotels/hotelErrors');

const errors = {
    USERS: userErrors,
    CITIES: cityErrors,
    AUTH: authErrors,
    HOTELS: hotelErrors, 
};

module.exports = errors;