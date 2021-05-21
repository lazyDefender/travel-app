const generateError = require("../utils/generateError");

const errors = {
    notFoundById: (id) => generateError(`User ${id} does not exist`),
}

module.exports = errors;