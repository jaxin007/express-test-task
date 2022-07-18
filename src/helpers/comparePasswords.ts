import * as bcrypt from 'bcryptjs';

export const comparePasswords = (passwordToCompare: string, hash: string): boolean =>
    bcrypt.compareSync(passwordToCompare, hash);
