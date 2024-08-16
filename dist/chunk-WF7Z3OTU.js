import {
  comparePassword,
  hashPassword
} from "./chunk-TPCLH44J.js";
import {
  AuthenticationRepository
} from "./chunk-WDEH7WHI.js";
import {
  Role,
  User
} from "./chunk-KV2SVF35.js";
import {
  AuthenticationError,
  RefreshTokenError
} from "./chunk-WXVOJ4UM.js";
import {
  __async,
  __decorateClass
} from "./chunk-NWOUITKB.js";

// core/auth/authentication.service.ts
import jwt from "jsonwebtoken";
import { injectable } from "inversify";
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
    const token = jwt.sign(payload, secret, {
      expiresIn: process.env.REFRESH_TOKEN_EXP
    });
    return token;
  }
  createToken(payload = {}) {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, {
      expiresIn: process.env.ACCESS_TOKEN_EXP
    });
    return token;
  }
};
AuthenticationService.validateToken = (token) => {
  const secret = process.env.JWT_SECRET;
  return jwt.verify(token, secret);
};
AuthenticationService = __decorateClass([
  injectable()
], AuthenticationService);

export {
  AuthenticationService
};
