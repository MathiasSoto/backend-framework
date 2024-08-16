export type SignInDto = {
  first_name: string
  last_name: string
  email: string
  password: string
}

export type AuthenticationDto = {
  email: string
  password: string
}

export type AuthenticationResponse = {
  user_id: string
  user_email: string
  access_token: string
  refresh_token: string
}

export type AuthenticationPayload = {
  email: string
  id: string
}

export interface IAuthenticationService {
  signIn(data: SignInDto): Promise<void>
  authenticate(data: AuthenticationDto): Promise<AuthenticationResponse>
  refreshToken(refreshToken: string): Promise<AuthenticationResponse>
}
