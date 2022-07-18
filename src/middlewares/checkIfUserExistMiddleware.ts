import { NextFunction, Request, Response } from 'express';

import { UserDtoI } from '../interfaces';
import { getUserByUsername } from '../helpers';

export const checkIfUserExistMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { body }: { body: UserDtoI } = req;

    const maybeUser = getUserByUsername(body.username);

    if (maybeUser) {
        throw new Error('USER_ALREADY_EXIST');
    }

    return next();
};
