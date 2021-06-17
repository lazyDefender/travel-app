const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const cityRoute = require('./cityRoute');
const hotelRoute = require('./hotelRoute');

module.exports = (app) => {
    app.use('/api/auth', authRoute);
    app.use('/api/users', userRoute);
    app.use('/api/cities', cityRoute);
    app.use('/api/hotels', hotelRoute);
};