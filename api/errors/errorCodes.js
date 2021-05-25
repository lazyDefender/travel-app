const userErrorCodes = require('./users/userErrorCodes');
const cityErrorCodes = require('./cities/cityErrorCodes');

const errorCodes = {
    USERS: userErrorCodes,
    CITIES: cityErrorCodes,
};

module.exports = errorCodes;