type SignInDto = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};
type AuthenticationDto = {
    email: string;
    password: string;
};
type AuthenticationResponse = {
    user_id: string;
    user_email: string;
    access_token: string;
    refresh_token: string;
};
type AuthenticationPayload = {
    email: string;
    id: string;
};
interface IAuthenticationService {
    signIn(data: SignInDto): Promise<void>;
    authenticate(data: AuthenticationDto): Promise<AuthenticationResponse>;
    refreshToken(refreshToken: string): Promise<AuthenticationResponse>;
}

export type { AuthenticationDto, AuthenticationPayload, AuthenticationResponse, IAuthenticationService, SignInDto };
