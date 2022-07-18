export interface UserEntryI {
    email: string;
    type: 'user' | 'admin';
    salt: string;
    passwordhash: string;
}
