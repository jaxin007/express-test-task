// CODE HERE
//
// I want to be able to register a new unique user (username and password). After the user is created I
// should be able to log in with my username and password. If a user register request is invalid a 400 error
// should be returned, if the user is already registered a conflict error should be returned.
// On login the users credentials should be verified.
// Because we don't have a database in this environment we store the users in memory. Fill the helper functions
// to query the memory db.
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';

import { UserEntryI } from './interfaces';
import { NotFoundError } from './common/notFoundError';
import { loginUserSchema, registerUserSchema } from './validation';
import { loginUserController, registerNewUserController } from './controllers';
import { checkIfUserExistMiddleware, checkIfUserNotExistMiddleware, validationMiddleware } from './middlewares';

const app = express();
const port = 3000;

// Database mock where the username is the primary key of a user.
export const MEMORY_DB: Record<string, UserEntryI> = {};

app.use(express.json());

app.post(
    '/register',
    validationMiddleware('body', registerUserSchema),
    checkIfUserExistMiddleware,
    registerNewUserController,
);
app.post('/login', validationMiddleware('body', loginUserSchema), checkIfUserNotExistMiddleware, loginUserController);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
    return res.status(err instanceof NotFoundError ? 404 : 500).json({ errMessage: err.message, stack: err.stack });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
