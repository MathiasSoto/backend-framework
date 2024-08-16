import jwt from 'jsonwebtoken'
import { AuthenticationError, RefreshTokenError } from './errors'
import AuthenticationRepository from './authentication.repository'
import {
  AuthenticationDto,
  AuthenticationPayload,
  AuthenticationResponse,
  IAuthenticationService,
  SignInDto
} from './types'
import { comparePassword, hashPassword } from './utils'
import { Role, User } from './models'
import { injectable } from 'inversify'

@injectable()
export class AuthenticationService implements IAuthenticationService {
  private repository = new AuthenticationRepository()

  async signIn(data: SignInDto): Promise<void> {
    const user = new User()
    user.firstName = data.first_name
    user.lastName = data.last_name
    user.email = data.email
    user.password = await hashPassword(data.password)

    const admin = new Role()
    admin.name = 'ADMIN'
    user.roles = [admin]

    await this.repository.createUser(user)
  }

  async authenticate(data: AuthenticationDto): Promise<AuthenticationResponse> {
    const user = await this.repository.getUserByEmail(data.email)
    if (user) {
      if (await comparePassword(data.password, user.password)) {
        const payload = { email: user.email, id: user.id }
        const accessToken = this.createToken(payload)
        const refreshToken = this.createRefreshToken(payload)
        return {
          user_id: user.id,
          user_email: user.email,
          access_token: accessToken,
          refresh_token: refreshToken
        }
      }
    }
    throw AuthenticationError
  }

  async refreshToken(refreshToken: string): Promise<AuthenticationResponse> {
    const tokenData: AuthenticationPayload = AuthenticationService.validateToken(refreshToken)
    if (tokenData) {
      const user = await this.repository.getUserByEmail(tokenData.email)
      if (user) {
        const payload = { email: user.email, id: user.id }
        const accessToken = this.createToken(payload)
        const refreshToken = this.createRefreshToken(payload)
        return {
          user_id: user.id,
          user_email: user.email,
          access_token: accessToken,
          refresh_token: refreshToken
        }
      }
    }
    throw RefreshTokenError
  }

  private createRefreshToken(payload: object = {}) {
    const secret = process.env.JWT_SECRET as string
    const token = jwt.sign(payload, secret, {
      expiresIn: process.env.REFRESH_TOKEN_EXP
    })
    return token
  }

  private createToken(payload: object = {}) {
    const secret = process.env.JWT_SECRET as string
    const token = jwt.sign(payload, secret, {
      expiresIn: process.env.ACCESS_TOKEN_EXP
    })
    return token
  }

  public static validateToken = (token: string): AuthenticationPayload => {
    const secret = process.env.JWT_SECRET as string
    return jwt.verify(token, secret) as AuthenticationPayload
  }
}
