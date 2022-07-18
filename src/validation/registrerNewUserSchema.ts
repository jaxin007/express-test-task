import * as joi from 'joi';

import { minSpecCharactersValidation } from './common/minSpecCharactersValidation';

export const registerUserSchema: joi.ObjectSchema = joi.object({
    username: joi.string().alphanum().min(4).max(24).required(),
    email: joi.string().email().required(),
    type: joi.string().valid('user', 'admin').required(),
    password: joi.string().min(5).max(24).custom(minSpecCharactersValidation).required().messages({
        specialCharactersFail: 'password should contain at least 1 special character',
    }),
});
