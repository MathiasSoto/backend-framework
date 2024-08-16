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

// core/http/validate.ts
var validate_exports = {};
__export(validate_exports, {
  CookiesValidate: () => CookiesValidate,
  QueryRequestValidate: () => QueryRequestValidate,
  RequestValidate: () => RequestValidate,
  SignedCookiesValidate: () => SignedCookiesValidate
});
module.exports = __toCommonJS(validate_exports);
var import_joi = __toESM(require("joi"), 1);

// core/http/decorators.ts
var import_express_rate_limit = __toESM(require("express-rate-limit"), 1);
var import_cors = __toESM(require("cors"), 1);
function Middleware(middleware) {
  return function(target, propertyKey, descriptor) {
    const middlewares = Reflect.getMetadata("middlewares", target, propertyKey) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata("middlewares", middlewares, target, propertyKey);
  };
}

// core/http/validate.ts
function RequestValidate(rules) {
  const schema = import_joi.default.object(rules);
  return Middleware((req, res, next) => {
    if (bodyValidate(req, schema)) next();
  });
}
function QueryRequestValidate(rules) {
  const schema = import_joi.default.object(rules);
  return Middleware((req, res, next) => {
    if (queryValidate(req, schema)) next();
  });
}
function CookiesValidate(rules) {
  const schema = import_joi.default.object(rules);
  return Middleware((req, res, next) => {
    if (cookiesValidate(req, schema)) next();
  });
}
function SignedCookiesValidate(rules) {
  const schema = import_joi.default.object(rules);
  return Middleware((req, res, next) => {
    if (signedCookiesValidate(req, schema)) next();
  });
}
function bodyValidate(req, schema) {
  const { error, value } = schema.validate(req.body);
  if (error) throw new Error("Validation Error");
  return true;
}
function queryValidate(req, schema) {
  const { error, value } = schema.validate(req.query);
  if (error) throw new Error("Validation Error");
  return true;
}
function cookiesValidate(req, schema) {
  const { error, value } = schema.validate(req.cookies);
  if (error) throw new Error("Validation Error");
  return true;
}
function signedCookiesValidate(req, schema) {
  const { error, value } = schema.validate(req.signedCookies);
  if (error) throw new Error("Validation Error");
  return true;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CookiesValidate,
  QueryRequestValidate,
  RequestValidate,
  SignedCookiesValidate
});
