const errorCodes = require("./cityErrorCodes");

const errors = {
    notFoundById: (id) => {
        const error = {
            code: errorCodes.CITY_NOT_FOUND_BY_ID,
            message: `City ${id} does not exist`,
        };

        return error;
    },
}

module.exports = errors;