import express from 'express';
import { AuthenticationResponse } from './types.js';

declare const hashPassword: (password: string) => Promise<string>;
declare const comparePassword: (password: string, hash: string) => Promise<boolean>;
declare const setAuthenticationCookies: (res: express.Response, data: AuthenticationResponse, secure?: boolean) => void;

export { comparePassword, hashPassword, setAuthenticationCookies };
