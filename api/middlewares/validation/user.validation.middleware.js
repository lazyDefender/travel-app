const { body, param } = require('express-validator');

const validation = {
    save: [
        body('firstName')
            .isLength({
                min: 1,
                max: 255,
            }).withMessage('firstName should be 1 to 255 characters long'),

        body('lastName')
            .isLength({
                min: 1,
                max: 255,
            }).withMessage('lastName should be 1 to 255 characters long'),
        
            body('email')
                .isEmail().withMessage('Should be a valid email'),

        body('authID')
            .isString().withMessage('authID should be a string')
            .notEmpty().withMessage('authID should not be empty')
    ],
    update: [
        param('id')
            .custom(value => {
                return UserRepository.existsWithId(parseInt(value))
                .then(user => {
                    if(user._exists !== 1) return Promise.reject(`User with id ${value} does not exist`)
                })
            }).withMessage('User does not exist')
        ,
        body('name')
            .isLength({
                min: 1,
                max: 255,
            }).withMessage('Name should be 1 to 255 characters long')
        ,
        body('email')
            .isEmail().withMessage('Should be valid email')
            .custom((value, { req }) => {
                return UserRepository.existsWithEmail(value, req.id).then(user => {
                    if(user._exists === 1) return Promise.reject('Email exists')
                })
            }).withMessage('Email exists')
        ,
        body('about')
            .isLength({
                max: 1000,
            }).withMessage('Length should be less than 1000')
        ,
    ],
    setPassword: [
        body('newPassword')
            .isLength({
                min: 6,
            }).withMessage('Password should be 6 or more characters long')
        ,
        body('email')
            .isEmail().withMessage('Should be valid email')
            .custom((value, { req }) => {
                return UserRepository.existsWithEmail(value, req.id).then(user => {
                    if(user._exists === 0) return Promise.reject('Email does not exist')
                })
            }).withMessage('Email does not exist')
    ],
}

module.exports = validation;