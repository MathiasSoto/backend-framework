import { Container } from 'inversify';

declare const container: Container;
declare const frameworkDependency: {
    DataSource: symbol;
    AuthenticationRepository: symbol;
    AuthenticationService: symbol;
};

export { container as default, frameworkDependency };
