export interface UserDtoI {
    username: string;
    email: string;
    type: 'user' | 'admin';
    password: string;
}
