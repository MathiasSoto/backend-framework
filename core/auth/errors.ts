import httpErrors from 'http-errors'

export const AuthenticationError = new httpErrors.BadGateway('Authentication error')

export const AccessTokenError = new httpErrors.Unauthorized('Access token error')

export const RefreshTokenError = new httpErrors.Unauthorized('Refresh token error')

export const AccessDeniedError = new httpErrors.Unauthorized('Access denied')
