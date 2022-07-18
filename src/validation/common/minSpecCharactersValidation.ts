import * as joi from 'joi';

export const minSpecCharactersValidation = (value: any, helpers: joi.CustomHelpers) => {
    // minimal special characters
    const min = 1;

    const numSpecial = value.length - (value.match(/[a-zA-Z0-9]/g) || []).length;

    if (numSpecial < min) {
        return helpers.error('specialCharactersFail');
    }

    return value;
};
