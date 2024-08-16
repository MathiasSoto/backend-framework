import express from 'express';
import cors from 'cors';

declare function Middleware(middleware: express.RequestHandler): MethodDecorator;
declare function Post(path: string): MethodDecorator;
declare function Get(path: string): MethodDecorator;
declare function Put(path: string): MethodDecorator;
declare function Delete(path: string): MethodDecorator;
declare function RateLimit(limit?: number): MethodDecorator;
declare function Cors(options: cors.CorsOptions): MethodDecorator;

export { Cors, Delete, Get, Middleware, Post, Put, RateLimit };
