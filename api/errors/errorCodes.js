const userErrorCodes = require('./users/userErrorCodes');
const cityErrorCodes = require('./cities/cityErrorCodes');
const authErrorCodes = require('./auth/authErrorCodes');

const errorCodes = {
    USERS: userErrorCodes,
    CITIES: cityErrorCodes,
    AUTH: authErrorCodes,
};

module.exports = errorCodes;