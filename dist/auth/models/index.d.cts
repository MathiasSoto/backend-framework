declare class Role {
    id: string;
    name: string;
    users: User[];
}

declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatar: string;
    active: boolean;
    tokenRefresh: string;
    roles: Role[];
}

export { Role, User };
