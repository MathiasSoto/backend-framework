"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// core/auth/models/index.ts
var models_exports = {};
__export(models_exports, {
  Role: () => Role,
  User: () => User
});
module.exports = __toCommonJS(models_exports);

// core/auth/models/user.model.ts
var import_typeorm2 = require("typeorm");

// core/auth/models/role.model.ts
var import_typeorm = require("typeorm");
var Role = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid")
], Role.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Role.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.ManyToMany)(() => User, (user) => user.roles),
  (0, import_typeorm.JoinTable)({ name: "roles_users" })
], Role.prototype, "users", 2);
Role = __decorateClass([
  (0, import_typeorm.Entity)()
], Role);

// core/auth/models/user.model.ts
var User = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid")
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)()
], User.prototype, "firstName", 2);
__decorateClass([
  (0, import_typeorm2.Column)()
], User.prototype, "lastName", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ unique: true, nullable: false })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm2.Column)()
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ nullable: true })
], User.prototype, "avatar", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ default: true })
], User.prototype, "active", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ nullable: true })
], User.prototype, "tokenRefresh", 2);
__decorateClass([
  (0, import_typeorm2.ManyToMany)(() => Role, (role) => role.users, { cascade: true })
], User.prototype, "roles", 2);
User = __decorateClass([
  (0, import_typeorm2.Entity)()
], User);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Role,
  User
});
