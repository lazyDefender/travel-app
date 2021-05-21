const generateError = require("../../utils/generateError");
const errorCodes = require("./errorCodes");

const errors = {
    notFoundById: (id) => {
        const error = generateError({
            code: errorCodes.USER_NOT_FOUND_BY_ID,
            message: `User ${id} does not exist`,
        });

        return error;
    }
}

module.exports = errors;