const errorCodes = require("./userErrorCodes");

const errors = {
    notFoundById: (id) => {
        const error = {
            code: errorCodes.USER_NOT_FOUND_BY_ID,
            message: `User ${id} does not exist`,
        };

        return error;
    }
}

module.exports = errors;