import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'

import { Role } from './role.model'
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  firstName: string
  @Column()
  lastName: string
  @Column({ unique: true, nullable: false })
  email: string
  @Column()
  password: string
  @Column({ nullable: true })
  avatar: string
  @Column({ default: true })
  active: boolean
  @Column({ nullable: true })
  tokenRefresh: string
  @ManyToMany(() => Role, (role) => role.users, { cascade: true })
  roles: Role[]
}
