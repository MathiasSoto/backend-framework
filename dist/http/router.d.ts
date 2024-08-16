import { Application } from 'express';

declare function registerControllers(app: Application, path: string): void;
declare function registerController(app: Application, controller: any): void;
declare function registerRoutes(app: Application, controllerInstance: any): void;

export { registerController, registerControllers, registerRoutes };
