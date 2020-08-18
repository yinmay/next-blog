import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  title: string;
  @Column('text')
  content: string;
  constructor(attribuates: Partial<Post>) {
    Object.assign(this, attribuates);
  }
}
