const generateError = ({code, message}) => ({
    error: true,
    code,
    message,
})

module.exports = generateError;