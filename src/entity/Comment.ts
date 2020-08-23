import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Post } from './Post';
@Entity()
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  content: string;
  @CreateDateColumn('time')
  createdAt: Date;
  @UpdateDateColumn('time')
  updatedAt: Date;
  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;
}
