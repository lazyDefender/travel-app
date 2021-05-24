const errors = require("../errors/errorCodes")

const validationError = (error) => {
    const result = {
        code: errors.USERS.VALIDATION_ERROR,
        message: error.msg,
    };

    return result;
}

module.exports = validationError;