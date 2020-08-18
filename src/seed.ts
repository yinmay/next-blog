import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Post } from './entity/Post';

createConnection()
  .then(async (connection) => {
    const posts = await connection.manager.find(Post);

    if (posts.length === 0) {
      await connection.manager.save(
        [1, 2, 3, 4, 5, 6, 7].map((n) => {
          return new Post({
            title: `Post ${n}`,
            content: `this is my ${n} article`,
          });
        })
      );
      console.log('seeds');
    }

    connection.close();
  })
  .catch((error: any) => console.log(1111111111, error));
