import * as bcrypt from 'bcryptjs';

export const hashPassword = (password: string, hash: string) => bcrypt.hashSync(password, hash);
