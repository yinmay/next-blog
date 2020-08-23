import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Post } from './Post';
import { Comment } from './Comment';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  username: string;
  @Column('varchar')
  passwardDigest: string;
  @CreateDateColumn('time')
  createdAt: Date;
  @UpdateDateColumn('time')
  updatedAt: Date;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];
}
