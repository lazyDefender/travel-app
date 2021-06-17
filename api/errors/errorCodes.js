const userErrorCodes = require('./users/userErrorCodes');
const cityErrorCodes = require('./cities/cityErrorCodes');
const authErrorCodes = require('./auth/authErrorCodes');
const hotelErrorCodes = require('./hotels/hotelErrorCodes');

const errorCodes = {
    USERS: userErrorCodes,
    CITIES: cityErrorCodes,
    AUTH: authErrorCodes,
    HOTELS: hotelErrorCodes,
};

module.exports = errorCodes;