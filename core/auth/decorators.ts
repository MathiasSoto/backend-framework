import express from 'express'
import { Middleware } from '../http/decorators'
import { AuthenticationService } from './authentication.service'
import { AccessDeniedError, AccessTokenError } from './errors'

export function AuthGuard(): MethodDecorator {
  return Middleware((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req?.header('Authorization') || req.cookies.access_token
    if (!token) throw AccessTokenError

    const user = AuthenticationService.validateToken(token)
    if (!user) throw AccessDeniedError
    next()
  })
}
