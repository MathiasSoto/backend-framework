// core/http/decorators.ts
import rateLimit from "express-rate-limit";
import cors from "cors";
function Middleware(middleware) {
  return function(target, propertyKey, descriptor) {
    const middlewares = Reflect.getMetadata("middlewares", target, propertyKey) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata("middlewares", middlewares, target, propertyKey);
  };
}
function methodDecoratorFactory(method) {
  return function(path) {
    return function(target, propertyKey, descriptor) {
      Reflect.defineMetadata("route", path, target, propertyKey);
      Reflect.defineMetadata("method", method, target, propertyKey);
    };
  };
}
function Post(path) {
  return methodDecoratorFactory("post")(path);
}
function Get(path) {
  return methodDecoratorFactory("get")(path);
}
function Put(path) {
  return methodDecoratorFactory("put")(path);
}
function Delete(path) {
  return methodDecoratorFactory("delete")(path);
}
function RateLimit(limit = 10) {
  return Middleware(
    rateLimit({
      windowMs: 1 * 60 * 1e3,
      max: limit,
      message: `You have exceeded the ${limit} requests in 1 minute limit!`,
      standardHeaders: true,
      legacyHeaders: false,
      keyGenerator: function(req) {
        return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      }
    })
  );
}
function Cors(options) {
  return Middleware(cors(options));
}

export {
  Middleware,
  Post,
  Get,
  Put,
  Delete,
  RateLimit,
  Cors
};
