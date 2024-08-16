import {
  Middleware
} from "../chunk-CLXXFKBH.js";
import "../chunk-NWOUITKB.js";

// core/http/validate.ts
import joi from "joi";
function RequestValidate(rules) {
  const schema = joi.object(rules);
  return Middleware((req, res, next) => {
    if (bodyValidate(req, schema)) next();
  });
}
function QueryRequestValidate(rules) {
  const schema = joi.object(rules);
  return Middleware((req, res, next) => {
    if (queryValidate(req, schema)) next();
  });
}
function CookiesValidate(rules) {
  const schema = joi.object(rules);
  return Middleware((req, res, next) => {
    if (cookiesValidate(req, schema)) next();
  });
}
function SignedCookiesValidate(rules) {
  const schema = joi.object(rules);
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
export {
  CookiesValidate,
  QueryRequestValidate,
  RequestValidate,
  SignedCookiesValidate
};
