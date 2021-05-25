const errorCodes = require("./authErrorCodes");

const errors = {
    invalidToken: () => {
        const error = {
            code: errorCodes.INVALID_TOKEN,
            message: `Invalid token`,
        };

        return error;
    },
}

module.exports = errors;