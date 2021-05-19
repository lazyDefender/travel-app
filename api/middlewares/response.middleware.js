const responseMiddleware = (req, res, next) => {
    if(req.validationError) {
       return res.status(400).json(req.validationError);
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