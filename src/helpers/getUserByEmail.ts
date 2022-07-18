import { UserEntryI } from '../interfaces';
import { MEMORY_DB } from '../index';

/**
 *
 * @param email {string} registered user email
 */
export const getUserByEmail = (email: string): UserEntryI | undefined => {
    for (const username in MEMORY_DB) {
        const user = MEMORY_DB[username];

        if (user.email === email) {
            return user;
        }
    }
};
