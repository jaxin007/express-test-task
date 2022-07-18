import { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';

export const validationMiddleware = (
    reqFieldToValidate: 'query' | 'body',
    schema: ObjectSchema,
): ((req: Request, res: Response, next: NextFunction) => any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req[reqFieldToValidate], {
            abortEarly: false,
        });

        if (validation.error) {
            return res.status(400).json({
                errMessage: validation.error.message,
                details: validation.error.details,
            });
        }

        return next();
    };
};
