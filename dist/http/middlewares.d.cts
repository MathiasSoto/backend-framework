import express from 'express';

declare const errorMiddleware: (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => void;

export { errorMiddleware };
