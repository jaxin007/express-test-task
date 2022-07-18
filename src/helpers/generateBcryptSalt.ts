import * as bcrypt from 'bcryptjs';

export const generateBcryptSalt = () => bcrypt.genSaltSync();
