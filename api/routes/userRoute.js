const { Router } = require('express');
const UserService = require('../services/UserService');
// const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

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

router.get('/:id', (req, res, next) => {
    const { id } = req.params;  
    const user = UserService.getOne(id);
    req.result = user ? {
        status: 200,
        body: user,
    } :
    {
        status: 404,
        body: {
            error: true,
            message: `User ${id} does not exist`,
        }
    };
    next();
}, responseMiddleware);

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const updatedUser = UserService.update(id, req.body);
    req.result = {
        status: 200,
        body: updatedUser,
    };
    next();
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    UserService.delete(id);
    req.result = {
        status: 200,
    }
    next();
}, responseMiddleware);

module.exports = router;