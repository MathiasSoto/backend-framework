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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// core/auth/authentication.repository.ts
var authentication_repository_exports = {};
__export(authentication_repository_exports, {
  default: () => AuthenticationRepository
});
module.exports = __toCommonJS(authentication_repository_exports);
var import_inversify2 = require("inversify");

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

// core/app/container.ts
var import_inversify = require("inversify");
var container = new import_inversify.Container();
var frameworkDependency = {
  DataSource: Symbol.for("DataSource"),
  AuthenticationRepository: Symbol.for("AuthenticationRepository"),
  AuthenticationService: Symbol.for("AuthenticationService")
};
var container_default = container;

// core/auth/authentication.repository.ts
var AuthenticationRepository = class {
  constructor() {
    this.dataSource = container_default.get(
      frameworkDependency.DataSource
    );
    this.repository = this.dataSource.manager.getRepository(User);
  }
  getUserByEmail(email) {
    return __async(this, null, function* () {
      return yield this.repository.findOne({ where: { email, active: true } });
    });
  }
  createUser(user) {
    return __async(this, null, function* () {
      return yield this.repository.save(user);
    });
  }
};
AuthenticationRepository = __decorateClass([
  (0, import_inversify2.injectable)()
], AuthenticationRepository);
