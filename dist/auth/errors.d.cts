import httpErrors from 'http-errors';

declare const AuthenticationError: httpErrors.HttpError<502>;
declare const AccessTokenError: httpErrors.HttpError<401>;
declare const RefreshTokenError: httpErrors.HttpError<401>;
declare const AccessDeniedError: httpErrors.HttpError<401>;

export { AccessDeniedError, AccessTokenError, AuthenticationError, RefreshTokenError };
