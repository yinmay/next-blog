import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Post } from './entity/Post';
import { Comment } from './entity/Comment';

createConnection()
  .then(async (connection) => {
    const { manager } = await connection;
    //create user
    const u1 = new User();
    u1.username = 'mei';
    u1.passwordDigest = 'xxx';
    await manager.save(u1);
    //create post
    const p1 = new Post();
    p1.author = u1;
    p1.title = 'post1';
    p1.content = 'my first content';
    await manager.save(p1);

    // create comment
    const c1 = new Comment();
    c1.user = u1;
    c1.post = p1;
    c1.content = 'good';
    await manager.save(c1);

    console.log(c1);

    connection.close();
  })
  .catch((error: any) => console.log(1111111111, error));
