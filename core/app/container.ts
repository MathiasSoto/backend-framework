import { Container } from "inversify";

const container = new Container();

export const frameworkDependency = {
  DataSource: Symbol.for("DataSource"),
  AuthenticationRepository: Symbol.for("AuthenticationRepository"),
  AuthenticationService: Symbol.for("AuthenticationService"),
};

export default container;
