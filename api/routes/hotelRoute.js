const { Router } = require('express');
const HotelService = require('../services/HotelService');
const validation = require('../middlewares/validation/hotel.validation.middleware');
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
        const { data: createdHotel, error } = await HotelService.create(req.body);
        req.result = {
            status: 201,
            body: createdHotel,
        };
        
        next(); 
    }
});

router.get('/', async (req, res, next) => {
    const { data: hotels } = await HotelService.getAll();
    req.result = {
        status: 200,
        body: hotels,
    }
    
    next();
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;  
    const { data: hotel, error } = await HotelService.getById(id);

    if(error && error.code === errorCodes.HOTELS.HOTEL_NOT_FOUND_BY_ID) {
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
            body: hotel,
        }
    }
     
    next();
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { error } = await HotelService.delete(id);

    if(error && error.code === errorCodes.HOTELS.HOTEL_NOT_FOUND_BY_ID) {
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