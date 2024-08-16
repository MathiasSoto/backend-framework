import {
  User
} from "./chunk-KV2SVF35.js";
import {
  container_default,
  frameworkDependency
} from "./chunk-I6IGFUFM.js";
import {
  __async,
  __decorateClass
} from "./chunk-NWOUITKB.js";

// core/auth/authentication.repository.ts
import { injectable } from "inversify";
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
  injectable()
], AuthenticationRepository);

export {
  AuthenticationRepository
};
