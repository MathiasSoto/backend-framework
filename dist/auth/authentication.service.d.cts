import { IAuthenticationService, SignInDto, AuthenticationDto, AuthenticationResponse, AuthenticationPayload } from './types.cjs';

declare class AuthenticationService implements IAuthenticationService {
    private repository;
    signIn(data: SignInDto): Promise<void>;
    authenticate(data: AuthenticationDto): Promise<AuthenticationResponse>;
    refreshToken(refreshToken: string): Promise<AuthenticationResponse>;
    private createRefreshToken;
    private createToken;
    static validateToken: (token: string) => AuthenticationPayload;
}

export { AuthenticationService };
