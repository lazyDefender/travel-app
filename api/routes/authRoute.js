const { Router } = require('express');
const errors = require('../errors');
const errorCodes = require('../errors/errorCodes');
const AuthService = require('../services/AuthService');

const router = Router();

router.get('/currentUser', async (req, res, next) => {
    const token = req.header('authorization');
    const { data: user, error } = await AuthService.verifyToken(token);

    switch(error?.code) {
        case errorCodes.AUTH.INVALID_TOKEN:
            req.result = {
                body: error,
                status: 401,
            };
            break;
        case errorCodes.USERS.USER_NOT_FOUND_BY_UID:
            req.result = {
                body: error,
                status: 404,
            };
            break;
        default:
            req.result = {
                body: user,
                status: 200,
            };
            break;
    }
    
    next();
});

module.exports = router;