// core/auth/errors.ts
import httpErrors from "http-errors";
var AuthenticationError = new httpErrors.BadGateway("Authentication error");
var AccessTokenError = new httpErrors.Unauthorized("Access token error");
var RefreshTokenError = new httpErrors.Unauthorized("Refresh token error");
var AccessDeniedError = new httpErrors.Unauthorized("Access denied");

export {
  AuthenticationError,
  AccessTokenError,
  RefreshTokenError,
  AccessDeniedError
};
