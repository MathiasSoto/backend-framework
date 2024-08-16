import {
  __decorateClass
} from "./chunk-NWOUITKB.js";

// core/auth/models/role.model.ts
import { Entity as Entity2, PrimaryGeneratedColumn as PrimaryGeneratedColumn2, Column as Column2, ManyToMany as ManyToMany2, JoinTable } from "typeorm";

// core/auth/models/user.model.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
var User = class {
};
__decorateClass([
  PrimaryGeneratedColumn("uuid")
], User.prototype, "id", 2);
__decorateClass([
  Column()
], User.prototype, "firstName", 2);
__decorateClass([
  Column()
], User.prototype, "lastName", 2);
__decorateClass([
  Column({ unique: true, nullable: false })
], User.prototype, "email", 2);
__decorateClass([
  Column()
], User.prototype, "password", 2);
__decorateClass([
  Column({ nullable: true })
], User.prototype, "avatar", 2);
__decorateClass([
  Column({ default: true })
], User.prototype, "active", 2);
__decorateClass([
  Column({ nullable: true })
], User.prototype, "tokenRefresh", 2);
__decorateClass([
  ManyToMany(() => Role, (role) => role.users, { cascade: true })
], User.prototype, "roles", 2);
User = __decorateClass([
  Entity()
], User);

// core/auth/models/role.model.ts
var Role = class {
};
__decorateClass([
  PrimaryGeneratedColumn2("uuid")
], Role.prototype, "id", 2);
__decorateClass([
  Column2()
], Role.prototype, "name", 2);
__decorateClass([
  ManyToMany2(() => User, (user) => user.roles),
  JoinTable({ name: "roles_users" })
], Role.prototype, "users", 2);
Role = __decorateClass([
  Entity2()
], Role);

export {
  Role,
  User
};
