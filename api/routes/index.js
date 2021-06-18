const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const cityRoute = require('./cityRoute');
const hotelRoute = require('./hotelRoute');
const tourRoute = require('./tourRoute');
const orderRoute = require('./orderRoute');

module.exports = (app) => {
    app.use('/api/auth', authRoute);
    app.use('/api/users', userRoute);
    app.use('/api/cities', cityRoute);
    app.use('/api/hotels', hotelRoute);
    app.use('/api/tours', tourRoute);
    app.use('/api/orders', orderRoute);
};