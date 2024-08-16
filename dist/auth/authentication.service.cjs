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

// core/auth/authentication.service.ts
var authentication_service_exports = {};
__export(authentication_service_exports, {
  AuthenticationService: () => AuthenticationService
});
module.exports = __toCommonJS(authentication_service_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);

// core/auth/errors.ts
var import_http_errors = __toESM(require("http-errors"), 1);
var AuthenticationError = new import_http_errors.default.BadGateway("Authentication error");
var AccessTokenError = new import_http_errors.default.Unauthorized("Access token error");
var RefreshTokenError = new import_http_errors.default.Unauthorized("Refresh token error");
var AccessDeniedError = new import_http_errors.default.Unauthorized("Access denied");

// core/auth/authentication.repository.ts
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

// core/auth/utils.ts
var import_bcrypt = __toESM(require("bcrypt"), 1);
var hashPassword = (password) => __async(void 0, null, function* () {
  return yield import_bcrypt.default.hash(password, 10);
});
var comparePassword = (password, hash) => __async(void 0, null, function* () {
  return yield import_bcrypt.default.compare(password, hash);
});

// core/auth/authentication.service.ts
var import_inversify3 = require("inversify");
var AuthenticationService = class {
  constructor() {
    this.repository = new AuthenticationRepository();
  }
  signIn(data) {
    return __async(this, null, function* () {
      const user = new User();
      user.firstName = data.first_name;
      user.lastName = data.last_name;
      user.email = data.email;
      user.password = yield hashPassword(data.password);
      const admin = new Role();
      admin.name = "ADMIN";
      user.roles = [admin];
      yield this.repository.createUser(user);
    });
  }
  authenticate(data) {
    return __async(this, null, function* () {
      const user = yield this.repository.getUserByEmail(data.email);
      if (user) {
        if (yield comparePassword(data.password, user.password)) {
          const payload = { email: user.email, id: user.id };
          const accessToken = this.createToken(payload);
          const refreshToken = this.createRefreshToken(payload);
          return {
            user_id: user.id,
            user_email: user.email,
            access_token: accessToken,
            refresh_token: refreshToken
          };
        }
      }
      throw AuthenticationError;
    });
  }
  refreshToken(refreshToken) {
    return __async(this, null, function* () {
      const tokenData = AuthenticationService.validateToken(refreshToken);
      if (tokenData) {
        const user = yield this.repository.getUserByEmail(tokenData.email);
        if (user) {
          const payload = { email: user.email, id: user.id };
          const accessToken = this.createToken(payload);
          const refreshToken2 = this.createRefreshToken(payload);
          return {
            user_id: user.id,
            user_email: user.email,
            access_token: accessToken,
            refresh_token: refreshToken2
          };
        }
      }
      throw RefreshTokenError;
    });
  }
  createRefreshToken(payload = {}) {
    const secret = process.env.JWT_SECRET;
    const token = import_jsonwebtoken.default.sign(payload, secret, {
      expiresIn: process.env.REFRESH_TOKEN_EXP
    });
    return token;
  }
  createToken(payload = {}) {
    const secret = process.env.JWT_SECRET;
    const token = import_jsonwebtoken.default.sign(payload, secret, {
      expiresIn: process.env.ACCESS_TOKEN_EXP
    });
    return token;
  }
};
AuthenticationService.validateToken = (token) => {
  const secret = process.env.JWT_SECRET;
  return import_jsonwebtoken.default.verify(token, secret);
};
AuthenticationService = __decorateClass([
  (0, import_inversify3.injectable)()
], AuthenticationService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticationService
});
