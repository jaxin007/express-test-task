import { Request, Response } from 'express';

import { MEMORY_DB } from '../index';
import { UserDtoI } from '../interfaces';
import { generateBcryptSalt, hashPassword } from '../helpers';

// Request body -> UserDto
export const registerNewUserController = (req: Request, res: Response) => {
    const { password, type, username, email } = req.body as UserDtoI;

    const salt = generateBcryptSalt();

    const passwordhash = hashPassword(password, salt);

    MEMORY_DB[username] = {
        passwordhash,
        salt,
        email,
        type,
    };

    return res.status(200).json(MEMORY_DB);
};
