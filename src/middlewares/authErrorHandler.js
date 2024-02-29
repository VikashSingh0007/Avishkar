import { validationResult } from 'express-validator'
export function authErrorHandler(req, res , next) {
    const result = validationResult(req);
    const errors = result.array();

    if (!result.isEmpty()) {
        res.statusCode = 400;
        res.json({
            error: `error field: ${errors[0].param}`,
            message: errors[0].msg,
            success: false,
        });
    } else next();
}