const { Router } = require('express');
const UserService = require('../services/UserService');
// const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');
const generateError = require('../utils/generateError');
const errors = require('../errors');
const UserRepository = require('../repositories/UserRepository');
const errorCodes = require('../errors/users/errorCodes');

const router = Router();

router.post('/', async (req, res, next) => {
    if(req.validationError) {
        next();
    }
    else {
        try {
            const createdUser = await UserService.create(req.body);
            req.result = {
                status: 200,
                body: createdUser,
            };
        }
        catch(e) {
            req.result = {
                status: 400,
                body: {
                    error: true,
                    message: e.message,
                }
            }
        }
        finally {
            next();
        }
    }
        
    
    
}, responseMiddleware);

router.get('/', async (req, res, next) => {
    const users = await UserService.getAll();
    req.result = {
        status: 200,
        body: users,
    }
    next();
}, responseMiddleware);

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;  
    const { data: user, error } = await UserService.getById(id);
    if(error && error.code === errorCodes.USER_NOT_FOUND_BY_ID) {
        req.result = {
            status: 404,
            body: error,
        }
    }
    else {
        req.result = {
            status: 200,
            body: user,
        }
    }
     
    next();
}, responseMiddleware);

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const updatedUser = await UserService.update(id, req.body);
    req.result = {
        status: 200,
        body: updatedUser,
    };
    next();
}, responseMiddleware);

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const user = await UserRepository.getById(id);
    if(user) {
        await UserService.delete(id);
        req.result = {
            status: 200,
        }
    }
    
    next();
}, responseMiddleware);

module.exports = router;