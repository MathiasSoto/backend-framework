import {
  __require
} from "../chunk-NWOUITKB.js";

// core/http/router.ts
import fs from "fs";
function registerControllers(app, path) {
  fs.readdirSync(path).forEach((file) => {
    const filePath = `${path}/${file}`;
    if (fs.lstatSync(filePath).isDirectory()) {
      registerControllers(app, filePath);
    } else if (filePath.endsWith(".controller.ts")) {
      const controller = __require(filePath);
      const controllerInstance = new controller[Object.keys(controller)[0]]();
      registerRoutes(app, controllerInstance);
    }
  });
}
function registerController(app, controller) {
  registerRoutes(app, new controller());
}
function registerRoutes(app, controllerInstance) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(controllerInstance)).forEach((methodName) => {
    const routeHandler = controllerInstance[methodName].bind(controllerInstance);
    const path = Reflect.getMetadata("route", controllerInstance, methodName);
    const method = Reflect.getMetadata(
      "method",
      controllerInstance,
      methodName
    );
    const middlewares = Reflect.getMetadata("middlewares", controllerInstance, methodName) || [];
    if (path && method) {
      const isMethodValid = method in app && typeof app[method] === "function";
      if (isMethodValid) {
        ;
        app[method](path, ...middlewares, routeHandler);
      } else {
        console.warn(`Unsupported method '${method}' for route ${path}`);
      }
    }
  });
}
export {
  registerController,
  registerControllers,
  registerRoutes
};
