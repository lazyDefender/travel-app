const generateError = require("../utils/generateError");

const errors = {
    NotFoundById: (id) => generateError(`User ${id} does not exist`),
}

module.exports = errors;