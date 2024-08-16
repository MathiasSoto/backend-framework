import { injectable } from "inversify";
import { User } from "./models";
import container, { frameworkDependency } from "../app/container";
import { DataSource } from "typeorm";

export interface IAuthenticationRepository {
  getUserByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
}

@injectable()
export default class AuthenticationRepository
  implements IAuthenticationRepository
{
  private dataSource: DataSource = container.get(
    frameworkDependency.DataSource
  ) as DataSource;
  private repository = this.dataSource.manager.getRepository(User);

  public async getUserByEmail(email: string): Promise<User | null> {
    return await this.repository.findOne({ where: { email, active: true } });
  }

  public async createUser(user: User): Promise<User> {
    return await this.repository.save(user);
  }
}
