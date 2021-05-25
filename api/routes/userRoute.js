const { Router } = require('express');
const UserService = require('../services/UserService');
const validation = require('../middlewares/validation/user.validation.middleware');
const errorCodes = require('../errors/errorCodes');
const { validationResult } = require('express-validator');
const validationError = require('../utils/validationError');

const router = Router();

router.post('/', validation.save, async (req, res, next) => {
    const errors = validationResult(req)
        .errors
        .map(error => validationError(error));

    if(errors.length > 0) {
        req.validationErrors = errors;
    }
    
    if(req.validationErrors) {
        next();
    }

    else {
        const { data: createdUser, error } = await UserService.create(req.body);
        req.result = {
            status: 201,
            body: createdUser,
        };
        
        next(); 
    }
});

router.get('/', async (req, res, next) => {
    const { uid } = req.query;
    if(uid) {
        const { data: user, error } = await UserService.getByUid(uid);

        if(error && error.code === errorCodes.USERS.USER_NOT_FOUND_BY_UID) {
            const body = {
                errors: [error],
            }
    
            req.result = {
                body,
                status: 404,
            }
        }
        else {
            req.result = {
                status: 200,
                body: user,
            }
        }
    }
    
    else {
        const { data: users } = await UserService.getAll();
        req.result = {
            status: 200,
            body: users,
        }
    }
    
    next();
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;  
    const { data: user, error } = await UserService.getById(id);

    if(error && error.code === errorCodes.USERS.USER_NOT_FOUND_BY_ID) {
        const body = {
            errors: [error],
        }

        req.result = {
            body,
            status: 404,
        }
    }

    else {
        req.result = {
            status: 200,
            body: user,
        }
    }
     
    next();
});

router.patch('/:id', validation.update, async (req, res, next) => {
    const errors = validationResult(req)
        .errors
        .map(error => validationError(error));

    if(errors.length > 0) {
        req.validationErrors = errors;
    }
        
    if(req.validationErrors) {
        next();
    }
    
    const { id } = req.params;
    const { data: updatedUser, error } = await UserService.update(id, req.body);

    if(error && error.code === errorCodes.USERS.USER_NOT_FOUND_BY_ID) {
        const body = {
            errors: [error],
        }

        req.result = {
            body,
            status: 404,
        }
    }

    else {
        req.result = {
            status: 200,
            body: updatedUser,
        }
    }

    next();
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { error } = await UserService.delete(id);

    if(error && error.code === errorCodes.USERS.USER_NOT_FOUND_BY_ID) {
        const body = {
            errors: [error],
        }

        req.result = {
            body,
            status: 404,
        }
    }

    else {
        req.result = {
            status: 204,
        }
    }
    
    next();
});

module.exports = router;