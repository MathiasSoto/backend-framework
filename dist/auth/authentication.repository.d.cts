import { User } from './models/index.cjs';

interface IAuthenticationRepository {
    getUserByEmail(email: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
}
declare class AuthenticationRepository implements IAuthenticationRepository {
    private dataSource;
    private repository;
    getUserByEmail(email: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
}

export { type IAuthenticationRepository, AuthenticationRepository as default };
