import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm'
import { User } from './user.model'
@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  name: string
  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable({ name: 'roles_users' })
  users: User[]
}
