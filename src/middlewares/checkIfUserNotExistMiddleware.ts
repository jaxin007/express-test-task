import { NextFunction, Request, Response } from 'express';

import { UserDtoI } from '../interfaces';
import { getUserByUsername } from '../helpers';
import { NotFoundError } from '../common/notFoundError';

export const checkIfUserNotExistMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { body }: { body: UserDtoI } = req;

    const maybeUser = getUserByUsername(body.username);

    if (!maybeUser) {
        throw new NotFoundError('USER_NOT_FOUND');
    }

    return next();
};
