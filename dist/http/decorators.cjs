"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// core/http/decorators.ts
var decorators_exports = {};
__export(decorators_exports, {
  Cors: () => Cors,
  Delete: () => Delete,
  Get: () => Get,
  Middleware: () => Middleware,
  Post: () => Post,
  Put: () => Put,
  RateLimit: () => RateLimit
});
module.exports = __toCommonJS(decorators_exports);
var import_express_rate_limit = __toESM(require("express-rate-limit"), 1);
var import_cors = __toESM(require("cors"), 1);
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
    (0, import_express_rate_limit.default)({
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
  return Middleware((0, import_cors.default)(options));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cors,
  Delete,
  Get,
  Middleware,
  Post,
  Put,
  RateLimit
});
