const { Router } = require('express');
const TourService = require('../services/TourService');
const validation = require('../middlewares/validation/hotel.validation.middleware');
const errorCodes = require('../errors/errorCodes');
const { validationResult } = require('express-validator');
const validationError = require('../utils/validationError');

const router = Router();

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;  
    const { data: hotel, error } = await TourService.getById(id);

    if(error && error.code === errorCodes.TOURS.TOUR_NOT_FOUND_BY_ID) {
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

module.exports = router;