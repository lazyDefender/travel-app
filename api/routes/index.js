const userRoute = require('./userRoute');

module.exports = (app) => {
    app.use('/api/users', userRoute);
};