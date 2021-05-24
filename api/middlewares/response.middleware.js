const responseMiddleware = (req, res, next) => {
    if(req.validationErrors) {
        const body = {
            errors: req.validationErrors,
        };

        return res.status(400).json(body);
    }
    if(req.result) {
        const {
            status,
            body,
        } = req.result;
        return res.status(status).json(body);
    }
}

exports.responseMiddleware = responseMiddleware;