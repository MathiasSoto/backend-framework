// core/app/container.ts
import { Container } from "inversify";
var container = new Container();
var frameworkDependency = {
  DataSource: Symbol.for("DataSource"),
  AuthenticationRepository: Symbol.for("AuthenticationRepository"),
  AuthenticationService: Symbol.for("AuthenticationService")
};
var container_default = container;

export {
  frameworkDependency,
  container_default
};
