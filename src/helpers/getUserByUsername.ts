import { UserEntryI } from '../interfaces';
import { MEMORY_DB } from '../index';

/**
 *
 * @param username {string} registered user username
 */
export const getUserByUsername = (username: string): UserEntryI | undefined => {
    return MEMORY_DB[username];
};
