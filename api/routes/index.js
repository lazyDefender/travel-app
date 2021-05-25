const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const cityRoute = require('./cityRoute');

module.exports = (app) => {
    app.use('/api/auth', authRoute);
    app.use('/api/users', userRoute);
    app.use('/api/cities', cityRoute);
};