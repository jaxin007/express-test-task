import { Request, Response } from 'express';

import { comparePasswords, getUserByUsername } from '../helpers';

// Request body -> { username: string, password: string }
export const loginUserController = (req: Request, res: Response) => {
    // Return 200 if username and password match
    // Return 401 else
    const { username, password } = req.body as { username: string; password: string };

    const user = getUserByUsername(username)!;

    const isPasswordCorrect = comparePasswords(password, user.passwordhash);

    if (!isPasswordCorrect) {
        return res.status(401).json({ errMessage: 'INVALID_PASSWORD' });
    }

    return res.status(200).send('SUCCESS');
};
